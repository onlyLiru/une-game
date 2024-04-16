import React from "react";
import {
  Image,
  Popover,
  PopoverTrigger,
  Box,
  PopoverContent,
  Avatar,
} from "@chakra-ui/react";
import useUsreInfo from "@/recoil/useUserInfo";

function UserName() {
  const { userInfo } = useUsreInfo();

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Box
            tabIndex={0}
            role="button"
            aria-label="setting box"
            position="relative"
          >
            <Image
              className="flex-1"
              src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events%2Fgame%2F20240416-105831.png"
              h="4rem"
              w="auto"
              alt="login"
            />
            <header className="flex items-center gap-2 absolute top-0 left-4 right-5 bottom-2">
              <Avatar
                name="Dan Abrahmov"
                src={userInfo.profile_image}
                size="sm"
                transform={"skewX(-12deg)"}
                borderRadius="0"
                border="3px solid #fff"
                boxShadow="3px 3px black"
              />
              <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-white">
                {userInfo.username}
              </span>
            </header>
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
              <Avatar
                name="Dan Abrahmov"
                src={userInfo.profile_image}
                border="2px solid #fff"
              />
              <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                {userInfo.username}
              </span>
            </header>
            <main className="p-4">
              <h3>Email Address</h3>
              <p className="text-[#45CAAA] font-normal">
                {userInfo.login_email}
              </p>
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

export default UserName;
