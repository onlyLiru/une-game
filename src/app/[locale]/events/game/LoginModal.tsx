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
import { useTranslations } from "next-intl";
import EmailLoginStep1 from "./EmailLoginStep1";
import EmailLoginStep2 from "./EmailLoginStep2";

function LoginModal() {
  const t = useTranslations("Web2Login");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<any>();

  return (
    <>
      <Image
        className="flex-1"
        src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events%2Fgame%2F20240415-145856.png"
        w="auto"
        h="4rem"
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
              {t("title")}
            </AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <EmailLoginStep1 onClose={onClose} />
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default LoginModal;
