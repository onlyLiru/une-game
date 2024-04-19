"use client";

import { useEffect, useRef } from "react";
import useUsreInfo from "@/recoil/useUserInfo";
import useIsShowLoginModal from "@/recoil/useIsShowLoginModal";
import { saveUserScore } from "@/services/user";

function Content() {
  const { isLogin } = useUsreInfo();
  const { show, setShow } = useIsShowLoginModal();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setShow(!isLogin);
  }, [isLogin, setShow]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // 这里处理来自 iframe 的消息
      console.log("Received message from iframe:", event.data);
      if (!isNaN(event.data.message)) {
        saveUserScore(event.data.message);
        alert(event.data.message);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const sendMessageToIframe = () => {
    // 向 iframe 发送消息
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage("Hello from parent!", "*");
    }
  };

  return (
    <>
      <iframe
        className="w-full h-full"
        src="https://hyletic-aigc-service.s3.eu-central-1.amazonaws.com/aigc/data/v1/index.html"
      />
    </>
  );
}

export default Content;
