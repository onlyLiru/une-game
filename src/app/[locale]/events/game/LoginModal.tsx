"use client";

import React, { ReactNode, useEffect, useState } from "react";
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
import useIsShowLoginModal from "@/recoil/useIsShowLoginModal";
import EmailLoginContent from "./EmailLoginContent";

function LoginModal({ children }: { children?: ReactNode }) {
  const t = useTranslations("Web2Login");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<any>();
  const { show } = useIsShowLoginModal();

  useEffect(() => {
    show && onOpen();
  }, [show, onOpen]);

  return (
    <>
      {children ? (
        <div className="cursor-pointer" onClick={onOpen}>
          children
        </div>
      ) : (
        <Image
          className="flex-1"
          src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events%2Fgame%2F20240415-145856.png"
          w="auto"
          h={{ md: "4rem", base: "3rem" }}
          alt="login"
          onClick={onOpen}
          id="LOGIN_TRIGGER_BUTTON"
          cursor="pointer"
        />
      )}

      <AlertDialog
        motionPreset="slideInBottom"
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
        closeOnEsc={!show}
        closeOnOverlayClick={false}
      >
        <AlertDialogOverlay>
          <AlertDialogContent w={{ base: "98vw", md: "600px" }}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {t("title")}
            </AlertDialogHeader>
            {!show && <AlertDialogCloseButton />}
            <AlertDialogBody>
              <EmailLoginContent onClose={onClose} />
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default LoginModal;
