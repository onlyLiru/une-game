import React, { useState } from "react";
import {
  Input,
  Flex,
  Text,
  Box,
  useToast,
  Button,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { getEmailValidCode, loginWithEmailSerices } from "@/services/user";
import { jwtHelper } from "@/utils/jwt";
import { useFetchUser } from "@/apiHooks/useFetchUser";

function EmailLoginContent({ onClose }: { onClose: any }) {
  const t = useTranslations("Web2Login");
  const [showEmailFormatError, setShowEmailFormatError] = useState(false);
  const [email, setEmail] = React.useState(
    localStorage.getItem("UserEmail") || ""
  );
  const [step, setStep] = useState(1);
  const [emailErrorText, setEmailErrorText] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const toast = useToast();
  const [emailCode, setEmailCode] = useState("");
  const { fetchUser } = useFetchUser();

  const isValidEmail = (email: string) => {
    return /^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email);
  };

  const handleModalClose = () => {
    setEmail("");
    setEmailCode("");
    setShowEmailFormatError(false);
    setStep(0);
    onClose();
  };

  // 输入验证码
  const handlePinInputChange = (value: string) => {
    setEmailCode(value);
    // 如果填满5位直接触发提交
    if (value?.length >= 5) {
      loginWithEmail(email, value);
    }
  };

  // 点击登录按钮
  const handleClickLogin = () => {
    if (emailCode?.length < 5) {
      toast({
        position: "top",
        containerStyle: {
          top: "30px",
        },
        title: t("enterVerifyCode"),
        status: "error",
        isClosable: true,
      });
    } else {
      loginWithEmail(email, emailCode);
    }
  };

  // 邮箱登陆
  const loginWithEmail = async (email: string, code: string) => {
    if (buttonLoading) {
      return;
    }
    setButtonLoading(true);

    loginWithEmailSerices({
      email,
      code: Number(code),
    })
      .then(async ({ data }) => {
        jwtHelper.setEmail(email);
        jwtHelper.setToken(data.token);
        await fetchUser();
        // 登陆成功后把邮箱在本地缓存一份，用于下次登陆时回填
        window.localStorage.setItem("UserEmail", email);
        handleModalClose();
      })
      .catch(async (e) => {
        console.log(e);
        toast({
          position: "top",
          containerStyle: {
            top: "30px",
          },
          title: getErrorText(e.code) || "Request error",
          status: "error",
          isClosable: true,
        });
      })
      .finally(() => {
        setButtonLoading(false);
      });
  };

  const getErrorText = (code: number) => {
    let errorText = "";
    switch (code) {
      case 200019:
        errorText = t("sendTooOften");
        break;
      case 200020:
        errorText = t("verifyCodeError");
        break;
    }
    return errorText;
  };

  // 发送验证码
  const handleGetEmailValidCode = async () => {
    if (isValidEmail(email)) {
      setButtonLoading(true);

      await getEmailValidCode(email)
        .then(() => {
          setShowEmailFormatError(false);
          setStep(step + 1);
        })
        .catch((e) => {
          toast({
            position: "top",
            containerStyle: {
              top: "30px",
            },
            title: getErrorText(e.code) || "Request error",
            status: "error",
            isClosable: true,
          });
        })
        .finally(() => {
          setButtonLoading(false);
        });
    } else {
      if (!email) {
        setEmailErrorText(t("enterEmailTip"));
      } else {
        setEmailErrorText(t("errorEmailTip"));
      }
      setShowEmailFormatError(true);
    }
  };

  return (
    <>
      {step === 1 && (
        <Flex
          height="100%"
          flexDirection="column"
          justifyContent="space-between"
        >
          {/* 标题 */}
          <Text fontWeight={600} mb=".5rem">
            {t("loginWithEmail")}
          </Text>
          <Box width="100%">
            {/* 错误提示 */}
            {showEmailFormatError && (
              <Text
                textAlign="center"
                backgroundColor="rgba(255,0,48,0.17)"
                fontWeight="400"
                color="#FF0030"
                mb=".5rem"
              >
                {emailErrorText}
              </Text>
            )}
            <Input
              mb=".5rem"
              placeholder={t("enterEmailTip")}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleGetEmailValidCode();
                }
              }}
            ></Input>
            <Text fontWeight="400" mb=".5rem" color="rgba(0,0,0,0.25)">
              {t("autoRegister")}
            </Text>
          </Box>
          <Button
            borderRadius="28px"
            backgroundColor="black"
            color="white"
            width="100%"
            _hover={{ bg: "rgba(0,0,0,0.85)" }}
            isLoading={buttonLoading}
            loadingText={t("verifyCodeSending")}
            onClick={handleGetEmailValidCode}
          >
            {t("getVerifyCode")}
          </Button>
        </Flex>
      )}

      {step === 2 && (
        <Flex flexDirection="column" justifyContent="space-between">
          <Box>
            {/* 标题 */}
            <Text fontWeight={600}>{t("enterVerifyCode")}</Text>
            <Text mt="8px" color="rgba(0,0,0,0.25);">
              {t("verifyCodeSended")} {email}
            </Text>
          </Box>
          {/* 输入验证码的6个框框 */}
          <Flex justifyContent="space-between" my="1rem">
            <PinInput placeholder="" onChange={handlePinInputChange}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </Flex>
          <Button
            lineHeight="56px"
            borderRadius="28px"
            backgroundColor="black"
            color="white"
            width="100%"
            _hover={{ bg: "rgba(0,0,0,0.85)" }}
            isLoading={buttonLoading}
            onClick={handleClickLogin}
            my="1rem"
          >
            {t("login")}
          </Button>
        </Flex>
      )}
    </>
  );
}

export default EmailLoginContent;
