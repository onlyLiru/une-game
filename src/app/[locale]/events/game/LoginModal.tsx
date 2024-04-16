"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import EmailLoginStep1 from "./EmailLoginStep1";
import EmailLoginStep2 from "./EmailLoginStep2";

function LoginModal() {
  const [curStep, setStep] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<any>();

  return (
    <>
      <Image
        className="flex-1"
        src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events%2Fgame%2F20240415-145856.png"
        w="6rem"
        alt="login"
        onClick={onOpen}
      />

      <AlertDialog
        motionPreset="slideInBottom"
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Email Login
            </AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              {curStep === 1 ? <EmailLoginStep1 /> : <EmailLoginStep2 />}
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default LoginModal;
