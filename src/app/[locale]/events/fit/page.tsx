"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import {
  Box,
  Text,
  HStack,
  Button,
  Center,
  useToast,
  Flex,
  useMediaQuery,
  SimpleGrid,
  Image,
  useDisclosure,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  Modal,
  Tooltip,
  Link,
} from '@chakra-ui/react';
import { useRouter, redirect } from "next/navigation";

function Page() {
  const [width, setWidth] = useState<any>(0);
  const [height, setHeight] = useState<any>(0);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: openContact, onOpen: onContact, onClose: closeContact } = useDisclosure({
    id: 'Contact',
  })

  const router = useRouter();
  function handleOrientationChange() {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    console.log(width)
    console.log(height)
    setWidth(width)
    setHeight(height)

  }
  useEffect(() => {
    handleOrientationChange()
  }, []);
  return (
    <Box textShadow={"0px 2px 0px #000000"} color="#fff" fontWeight={"900"} fontFamily={"Lantinghei"} fontSize={'12px'}>
      <Box
        bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/gameBg.png'}
        bgRepeat="no-repeat"
        bgSize="100% 100%"
        bgPos="center"
        w={width}
        h={height}
        pt='10%'
        pb='10%'
      >

        <Image
          src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20228.png"
          w="6%"
          pos={'absolute'}
          top={'4%'}
          left={'4%'}
          onClick={()=> {router.push("/events/game");}}
        ></Image>
        <Box w='50%' m='0 auto' color='#fff' fontSize={'12px'} fontFamily={'Lantinghei'}>
          {/* <Box
            bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205.png'}
            bgRepeat="no-repeat"
            bgSize="100% 100%"
            bgPos="center"
            w='450px'
            h='70px'
            m='0 auto'
            mt='20px'
            display='flex'
            justifyContent={'center'}
            alignItems={"center"}
          >
            
          </Box> */}
          <Box
            bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205.png'}
            bgRepeat="no-repeat"
            bgSize="100% 100%"
            bgPos="center"
            w='60%'
            h='56px'
            m='0 auto'
            mt='20px'
            display='flex'
            justifyContent={'center'}
            alignItems={"center"}
            pb={'1%'}
            onClick={onOpen}
          >
            Privacy Policy
          </Box>
          <Box
            bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205.png'}
            bgRepeat="no-repeat"
            bgSize="100% 100%"
            bgPos="center"
            w='60%'
            h='56px'
            m='0 auto'
            mt='20px'
            display='flex'
            justifyContent={'center'}
            alignItems={"center"}
            pb={'1%'}
            onClick={onContact}
          >
            Help and Support
          </Box>
        </Box>
      </Box>
      <Modal
        onClose={closeContact}
        // finalFocusRef={btnRef}
        isOpen={openContact}
        scrollBehavior={'outside'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact us</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

          </ModalBody>
          {/* <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
      <Modal
        onClose={onClose}
        // finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={'outside'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Privacy Policy</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Effective Date: April 19th, 2024
            <br />
            Thank you for playing our games! This Privacy Policy describes:
            <br />
            - The data we collect about you
            <br />
            - How we protect your data
            <br />
            THE DATA WE COLLECT
            <br />
            Data you provide us directly.
            <br />
            Contact information (such as email address)
            <br />
            Player name or tag
            <br />
            Profile information
            <br />
            Data we collect automatically.
            <br />
            Data about your account and game progress
            <br />
            Your IP address and mobile device identifiers (such as your device)
            <br />
            Data about your device, such as device name and operating system, browser type and language, internet service provider, and mobile carrier
            <br />
            Data we collect with cookies and similar technologies (see more below)
            <br />
            Approximate location data (as derived from IP address)
            <br />
            Data about your use of the Service, such as gameplay data and your interactions with other players inside the Service
            <br />
            HOW DO WE PROTECT YOUR DATA
            <br />
            Security Safeguards.
            <br />
            In order to help ensure a secure and safe player experience, we are continuously developing and implementing administrative, technical and physical security measures to protect your data from unauthorized access or against loss, misuse or alteration.
            <br />
            Data retention.
            <br />
            We retain your data for as long as your account is active or as needed to provide you with the Service.
            Note that if you ask us to remove your personal data, we will retain your data as necessary for our legitimate business interests, such as to comply with our legal obligations, resolve disputes, and enforce our agreements.
            <br />
            COOKIES AND SIMILAR TECHNOLOGIES
            <br />
            We and our partners collect and store information about users' interactions with unaffiliated websites and applications that use our technologies, including cookies and similar tracking technologies. This allows us to infer the presence of a common user or household behind multiple devices or browsers, for instance, and then link those browsers and devices into a device graph. We do so in order to
            detect and prevent fraud;
            <br />
            improve the Service;
            <br />
            allow users to use the Service on one device and pick up seamlessly where they left off on another device;
            analytics, personalization and attribution;
            <br />
            limit the number of times a user is shown the same advertisement, across all known or inferred devices; and/or
            provide personalized advertising on each device that is inferred from the browsing patterns on all of the devices.

          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Page