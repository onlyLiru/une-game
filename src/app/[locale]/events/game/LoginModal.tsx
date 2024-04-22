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
  CloseButton,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import useForceLogin from "@/recoil/useForceLogin";
import EmailLoginContent from "./EmailLoginContent";
import useUsreInfo from "@/recoil/useUserInfo";

function LoginModal({
  children,
  loggedInHandler,
}: {
  children?: ReactNode;
  loggedInHandler?: Function;
}) {
  const t = useTranslations("Web2Login");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<any>();
  const { forceLoginState, setForceLoginState } = useForceLogin();
  const { isLogin } = useUsreInfo();
  const router = useRouter();

  useEffect(() => {
    if (forceLoginState.showLoginModal) {
      onOpen();
    } else {
      onClose();
    }
  }, [forceLoginState, forceLoginState.showLoginModal, onOpen, onClose]);

  return (
    <>
      {children ? (
        <div
          className="cursor-pointer"
          onClick={() => {
            if (isLogin) {
              loggedInHandler && loggedInHandler?.();
            } else {
              return onOpen();
            }
          }}
        >
          {children}
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
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <AlertDialogOverlay>
          <AlertDialogContent w={{ base: "98vw", md: "600px" }}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {t("title")}
            </AlertDialogHeader>
            {forceLoginState.noClose ? (
              <CloseButton
                pos="absolute"
                top=".5rem"
                right=".5rem"
                onClick={() => {
                  setForceLoginState({
                    ...forceLoginState,
                    showLoginModal: false,
                  });
                  forceLoginState.link && router.push(forceLoginState.link);
                }}
              />
            ) : (
              <AlertDialogCloseButton />
            )}
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
