import React from "react";
import {
  Image,
  Popover,
  PopoverTrigger,
  Box,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Avatar,
} from "@chakra-ui/react";

function Setting() {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Box tabIndex={0} role="button" aria-label="setting box">
            <Image
              className="flex-1"
              src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events%2Fgame%2F20240415-145913.png"
              w="3rem"
              h="auto"
              alt="login"
            />
          </Box>
        </PopoverTrigger>
        <PopoverContent
          style={{
            border: "solid 6px black",
            borderRadius: "0",
            boxShadow: "10px 10px black",
          }}
          right="5rem"
          w="16rem"
        >
          <div className="bg-[#394648] text-white font-bold">
            <header className="bg-[#4D6367] px-4 py-2 flex items-center gap-2">
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                username
              </span>
            </header>
            <main className="p-4">
              <h3>Email Address</h3>
              <p className="text-[#45CAAA] font-normal">568980773@gmail.com</p>
              <h3 className="mt-2">Personal Achievements</h3>
              <p className="text-[#F2E03C] font-normal">
                {" "}
                <span className="text-[#45CAAA]">Best Score</span> 312
              </p>
              <div className="flex justify-center mt-12 mb-3">
                <Image
                  src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events%2Fgame%2F20240415-153844.png"
                  w="7rem"
                  h="auto"
                  alt="login"
                />
              </div>
            </main>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default Setting;
