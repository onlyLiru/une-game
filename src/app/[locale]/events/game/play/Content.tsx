"use client";

import { useEffect, useRef, useState } from "react";
import useUsreInfo from "@/recoil/useUserInfo";
import useForceLogin from "@/recoil/useForceLogin";
import { saveUserScore } from "@/services/user";
import { useOrientation } from "@/hooks/useOrientation";
import { Button, Image } from "@chakra-ui/react";
import screenfull from "screenfull";
import styles from "./style.module.css";

function Content() {
  const { isLogin } = useUsreInfo();
  const { forceLoginState, setForceLoginState } = useForceLogin();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { isLandscape } = useOrientation();
  const [isFullscreen, setFullscreen] = useState(false);

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

  const fullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }

    screenfull.on("change", () => {
      setFullscreen(screenfull.isFullscreen);
    });
  };

  return (
    <div className={`w-full h-full ${styles.gameBox}`}>
      {/* <div className="fixed bottom-20 left-20 z-[9999]" onClick={fullscreen}>
        <Image
          src={
            isFullscreen
              ? "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events%2Fgame%2Ffullscreen-svgrepo-com.svg"
              : "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events%2Fgame%2Ffullscreen.png"
          }
          w={{ base: "5rem", md: "3rem" }}
          h="auto"
          alt="fullscreen"
        />
      </div> */}
      <iframe
        className="w-full h-full"
        // src="https://hyletic-aigc-service.s3.eu-central-1.amazonaws.com/aigc/data/v1/index.html"
        src="https://hyletic-aigc-service.s3.eu-central-1.amazonaws.com/aigc/data/v2/index.html"
      />
    </div>
  );
}

export default Content;
