"use client";

import { useEffect, useRef } from "react";
import useUsreInfo from "@/recoil/useUserInfo";
import useForceLogin from "@/recoil/useForceLogin";
import { saveUserScore } from "@/services/user";

function Content() {
  const { isLogin } = useUsreInfo();
  const { forceLoginState, setForceLoginState } = useForceLogin();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setForceLoginState({
      ...forceLoginState,
      showLoginModal: !isLogin,
      noClose: !isLogin,
      link: isLogin ? "" : "/events/game",
    });
  }, [isLogin]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // 这里处理来自 iframe 的消息
      console.log("Received message from iframe:", event.data);
      if (!isNaN(event.data.message)) {
        saveUserScore(event.data.message);
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

  useEffect(() => {
    const lockOrientation = () => {
      const screen: any = window.screen;
      if (screen.orientation) {
        // 锁定屏幕方向为横向
        (screen.orientation as any).lock("landscape");
      } else if (screen.mozLockOrientation) {
        // Firefox 浏览器支持的方法
        screen.mozLockOrientation("landscape");
      } else if (screen.msLockOrientation) {
        // IE 浏览器支持的方法
        screen.msLockOrientation("landscape");
      }
    };

    lockOrientation(); // 锁定屏幕方向

    // 组件卸载时解除屏幕方向锁定（可选）
    return () => {
      const screen: any = window.screen;
      if (screen.orientation) {
        screen.orientation.unlock();
      } else if (screen.mozLockOrientation) {
        screen.mozUnlockOrientation();
      } else if (screen.msLockOrientation) {
        screen.msUnlockOrientation();
      }
    };
  }, []);

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
