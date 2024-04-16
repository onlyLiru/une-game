import React, { useState } from "react";
import { Input, Flex, Text, Box, useToast, Button } from "@chakra-ui/react";

function EmailLoginStep1() {
  const [showEmailFormatError, setShowEmailFormatError] = useState(false);
  const [email, setEmail] = React.useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const toast = useToast();

  const isValidEmail = (email: string) => {
    return /^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email);
  };

  // 发送验证码
  const handleGetEmailValidCode = async () => {
    if (isValidEmail(email)) {
      setButtonLoading(true);
      //   await globalApi
      //     .sendEmailValidCode({
      //       email,
      //     })
      //     .then(() => {
      //       setShowEmailFormatError(false);
      //       setStep(step + 1);
      //     })
      //     .catch((e) => {
      //       toast({
      //         position: "top",
      //         containerStyle: {
      //           top: "30px",
      //         },
      //         title: getErrorText(e.code) || "Request error",
      //         status: "error",
      //         isClosable: true,
      //       });
      //     })
      //     .finally(() => {
      //       setButtonLoading(false);
      //     });
    } else {
      if (!email) {
        setEmailErrorText('t("header.web2Login.enterEmailTip")');
      } else {
        setEmailErrorText('t("header.web2Login.errorEmailTip")');
      }
      setShowEmailFormatError(true);
    }
  };

  return (
    <Flex height="100%" flexDirection="column" justifyContent="space-between">
      {/* 标题 */}
      <Text fontWeight={600}>{'t("header.web2Login.loginWithEmail")'}</Text>
      <Box width="100%">
        {/* 错误提示 */}
        {showEmailFormatError && (
          <Text
            textAlign="center"
            backgroundColor="rgba(255,0,48,0.17)"
            fontWeight="400"
            color="#FF0030"
          >
            {'t("emailErrorText")'}
          </Text>
        )}
        <Input
          placeholder={'t("header.web2Login.enterEmailTip")'}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleGetEmailValidCode();
            }
          }}
        ></Input>
        <Text fontWeight="400" color="rgba(0,0,0,0.25)">
          {'t("header.web2Login.autoRegister")'}
        </Text>
      </Box>
      <Button
        borderRadius="28px"
        backgroundColor="black"
        color="white"
        width="100%"
        _hover={{ bg: "rgba(0,0,0,0.85)" }}
        isLoading={buttonLoading}
        loadingText={'t("header.web2Login.verifyCodeSending")'}
        onClick={handleGetEmailValidCode}
      >
        {'t("header.web2Login.getVerifyCode")'}
      </Button>
    </Flex>
  );
}

export default EmailLoginStep1;
