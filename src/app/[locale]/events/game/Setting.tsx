import React from "react";
import { Image } from "@chakra-ui/react";

function Setting() {
  return (
    <div className="relative">
      <Image
        className="flex-1"
        src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events%2Fgame%2F20240415-145913.png"
        w="3rem"
        h="auto"
        alt="login"
      />
      <div className="absolute">asdfs</div>
    </div>
  );
}

export default Setting;
