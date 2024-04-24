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
    Progress,
    Link,
} from "@chakra-ui/react";
import { useRouter, redirect } from "next/navigation";
import { getBoardData } from "@/services/user";
import LoginModal from "./LoginModal";

import useMade from "@/recoil/useMade";
function Page() {
    // const [width, setWidth] = useState<any>(0);
    // const [height, setHeight] = useState<any>(0);
    // const [page, setPage] = useState<any>(3);
    const [ProgressBar, updateProgressBar] = useState<any>(0);
    const [boardInfo, setBoardInfo] = useState<any>([]);
    const router = useRouter();

    const { page, setPage } = useMade();
    
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: openContact, onOpen: onContact, onClose: closeContact } = useDisclosure({
    id: 'Contact',
  })
    function countTo100InThreeSeconds() {
        let currentNumber = 1;
        const targetNumber = 100;
        const duration = 3000; // 3 seconds
        const interval = duration / (targetNumber - currentNumber);

        const timer = setInterval(() => {
            if (currentNumber >= targetNumber) {
                clearInterval(timer);
                setTimeout(() => {
                    setPage(3);
                }, 1000);
            } else {
                currentNumber++;
                updateProgressBar(currentNumber); // 可以替换为其他操作
            }
        }, interval);
    }
    const goPlay = () => {
        router.push("/events/game/play");
    };
    //   const goPlay = () => {
    //     console.log(isLogin)
    //     if (!isLogin) {
    //         setShow(!isLogin);
    //     } else {
    //         router.push('/events/game/play');
    //     }
    // }
    const initBoard = async () => {

        const { data } = await getBoardData();
        console.log(data)
        setBoardInfo(data?.board_info)
    }
    useEffect(() => {
        if (page === 1) {
            setTimeout(() => {
                setPage(2)
            }, 1000);
        } else if (page === 2) {
            countTo100InThreeSeconds();
        } else {
            initBoard()
        }
    }, [page]);


    

    const PlayButton = () => (
        <Box
            bgImg={
                "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205.png"
            }
            bgRepeat="no-repeat"
            bgSize="100% 100%"
            bgPos="center"
            w="60%"
            h="66px"
            m="0 auto"
            fontSize={'20px'}
            mt="3%"
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
        >
            PLAY
        </Box>
    );

    return (
        <Box textShadow={"0px 3px 0px #000000"} color="#fff" fontWeight={"900"}>
            {page === 1 && (
                <Box
                    bg="#1a1a1a"
                    w={'100%'}
                    h={'100vh'}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Image w='50%' src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Frame%20198%20%281%29.png"></Image>
                </Box>
            )}
            {page === 2 && (
                <Box
                    bgImg={
                        "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%2018.png"
                    }
                    bgRepeat="no-repeat"
                    bgSize="100% 100%"
                    bgPos="center"
                    w={'100%'}
                    h={'100vh'}
                    overflow={"hidden"}
                    color={"#fff"}
                >
                    <Image
                        src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20207%20%281%29.png"
                        w={"100%"}
                        pos={"absolute"}
                        top={"0"}
                    ></Image>
                    <Image
                        src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Frame%20163307%20%281%29.png"
                        w={"100%"}
                        // h={'38%'}
                        // pos={'absolute'}
                        mt={"35%"}
                    ></Image>
                    <Box textAlign={"center"} mt={"5%"}>
                        Connecting to server...
                    </Box>
                    <Box
                        w={"80%"}
                        bgImg={
                            "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Mask%20group.png"
                        }
                        bgRepeat="no-repeat"
                        bgSize="100% 100%"
                        bgPos="center"
                        h={"40px"}
                        backgroundColor={"#3e3e3e"}
                        border={"1px solid #000"}
                        m={"0 auto"}
                        mt={"3%"}
                    >
                        <Box
                            w={`${ProgressBar}%`}
                            bgImg={
                                "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Mask%20group%20%281%29.png"
                            }
                            bgRepeat="no-repeat"
                            bgSize="100% 100%"
                            bgPos="center"
                            h={"100%"}
                            transition={"all .1s linear"}
                            pos={"relative"}
                        >
                            <Box pos={"absolute"} right={"20px"}>{`${ProgressBar}%`}</Box>
                        </Box>
                    </Box>
                    <Image
                        src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20208%20%281%29.png"
                        w={"100%"}
                        pos={"absolute"}
                        bottom={"0"}
                    ></Image>
                </Box>
            )}
            {page === 3 && (
                <Box
                    bgImg={
                        "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%2018%20%281%29.png"
                    }
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    bgPos="left top"
                    w={'100%'}
                    minHeight={'100vh'}
                    pt="4%"
                    pb="4%"
                    color="#fff"
                    // fontSize={'10px'}
                    fontFamily={"Lantinghei"}
                >
                    <Box w="100%" h="100%" m={"0 auto"} color="#fff">
                        <Box  >
                            {/* <Box display={"flex"} h={'20%'}>
                                <Box
                                    bgImg={
                                        "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%2099.png"
                                    }
                                    bgRepeat="no-repeat"
                                    bgSize="100% 100%"
                                    bgPos="center"
                                    w="50%"
                                    h='100%'
                                >
                                    <Box
                                        display={"flex"}
                                        justifyContent={"space-around"}
                                        w="80%"
                                        m="0 auto"
                                        // mt='60px'
                                        pt="4%"
                                        pb="4%"
                                    >
                                        <Box textAlign={'center'} onClick={() => {window.location.href = 'https://twitter.com/UneWeb3';}}>
                                            <Image
                                                src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20225.png"
                                                w="30%"
                                                m={'0 auto'}
                                            ></Image>
                                            UneMeta
                                        </Box>
                                        <Box textAlign={'center'} >
                                            <Image
                                                src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20227.png"
                                                w="30%"
                                                m={'0 auto'}
                                            ></Image>
                                            Opencoord
                                        </Box>
                                    </Box>
                                </Box>
                                <Box
                                    bgImg={
                                        "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%20100.png"
                                    }
                                    bgRepeat="no-repeat"
                                    bgSize="100% 100%"
                                    bgPos="center"
                                    w="50%"
                                    h='100%'
                                >
                                    <Box
                                        display={"flex"}
                                        justifyContent={"space-around"}
                                        m="0 auto"
                                        w="45%"
                                        pt="4%"
                                        pb="4%"
                                    >
                                        <Box textAlign={'center'} onClick={() => {window.location.href = 'https://www.unemeta.com';}}>
                                            <Image
                                                src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20227%20%281%29.png"
                                                w="30%"
                                                m={'0 auto'}
                                            ></Image>
                                            UneMeta
                                        </Box>
                                    </Box>
                                </Box>
                            </Box> */}
                            <Image
                                src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20223%20%281%29.png"
                                w="100%"
                                // h={'56%'}
                                // ml={"4%"}
                                mt="22%"
                            ></Image>
                            <LoginModal loggedInHandler={goPlay}>
                                <PlayButton />
                            </LoginModal>
                        </Box>

                        <Box
                            bgImg={
                                "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%2098%20%281%29.png"
                            }
                            bgRepeat="no-repeat"
                            bgSize="100% 100%"
                            bgPos="center"
                            w="90%"
                            p={"4% 2%"}
                            m='0 auto'
                            mt='10%'
                            display={"flex"}
                            flexWrap={"wrap"}
                        >
                            {
                                boardInfo?.map((val: any) => <>
                                    {val?.rank === 1 && <Box
                                        bgImg={
                                            "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205%20%283%29.png"
                                        }
                                        bgRepeat="no-repeat"
                                        bgSize="100% 100%"
                                        bgPos="center"
                                        w="50%"
                                        h="26%"
                                        // display={'flex'}
                                        // justifyContent={'space-around'}
                                        // alignItems={'center'}
                                        p="3% 2% 4% 4%"
                                        ml={"24%"}
                                    >
                                        <Box pos={'absolute'}>{val?.rank}</Box>
                                        <Image
                                            src={val?.avatar}
                                            w={"24%"}
                                            m={"0 auto"}
                                        ></Image>
                                        <Box textAlign={"center"}>{val?.nick_name}</Box>
                                        <Box display={"flex"} justifyContent={"center"}>
                                            <Image
                                                src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png"
                                                w={"18%"}
                                            ></Image>
                                            <Box color='#FFC42C'>{val?.score}</Box>
                                        </Box>
                                    </Box>}
                                    {val?.rank === 2 && <Box
                                        bgImg={
                                            "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205%20%282%29.png"
                                        }
                                        bgRepeat="no-repeat"
                                        bgSize="100% 100%"
                                        bgPos="center"
                                        w="50%"
                                        h="26%"
                                        // display={'flex'}
                                        // justifyContent={'space-around'}
                                        // alignItems={'center'}
                                        p="3% 2% 4% 4%"
                                    >
                                        <Box pos={'absolute'}>{val?.rank}</Box>
                                        <Image
                                            src={val?.avatar}
                                            w={"24%"}
                                            m={"0 auto"}
                                        ></Image>
                                        <Box textAlign={"center"}>{val?.nick_name}</Box>
                                        <Box display={"flex"} justifyContent={"center"}>
                                            <Image
                                                src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png"
                                                w={"18%"}
                                            ></Image>
                                            <Box color='#FFC42C'>{val?.score}</Box>
                                        </Box>
                                    </Box>}
                                    {val?.rank === 3 && <Box
                                        bgImg={
                                            "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205%20%284%29.png"
                                        }
                                        bgRepeat="no-repeat"
                                        bgSize="100% 100%"
                                        bgPos="center"
                                        w="50%"
                                        h="26%"
                                        // display={'flex'}
                                        // justifyContent={'space-around'}
                                        // alignItems={'center'}
                                        p="3% 2% 4% 4%"
                                    >
                                        <Box pos={'absolute'}>{val?.rank}</Box>
                                        <Image
                                            src={val?.avatar}
                                            w={"24%"}
                                            m={"0 auto"}
                                        ></Image>
                                        <Box textAlign={"center"}>{val?.nick_name}</Box>
                                        <Box display={"flex"} justifyContent={"center"}>
                                            <Image
                                                src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png"
                                                w={"18%"}
                                            ></Image>
                                            <Box color='#FFC42C'>{val?.score}</Box>
                                        </Box>
                                    </Box>
                                    }
                                    {(val?.rank !== 1 && val?.rank !== 2 && val?.rank !== 3) && <Box
                                        bgImg={
                                            "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205%20%281%29.png"
                                        }
                                        bgRepeat="no-repeat"
                                        bgSize="100% 100%"
                                        bgPos="center"
                                        w="100%"
                                        // h="8%"
                                        display={"flex"}
                                        justifyContent={"space-around"}
                                        alignItems={"center"}
                                        p="4% 4% 6% 5%"
                                    >
                                        <Box w={'10%'}>{val?.rank}</Box>
                                        <Box display={'flex'} alignItems={"center"} flex='1'>
                                            <Image
                                                src={val?.avatar}
                                                w={'10%'}
                                            ></Image>
                                            <Box>{val?.nick_name}</Box>
                                        </Box>
                                        <Box display={'flex'} alignItems={"center"} w='30%'>

                                            <Image
                                                src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png"
                                                h={"100%"}
                                            ></Image>
                                            <Box>{val?.score}</Box>
                                        </Box>
                                    </Box>
                                    }
                                </>)
                            }
                        </Box>
                        <Box
                            bgImg={
                                "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%2099%20%281%29.png"
                            }
                            bgRepeat="no-repeat"
                            bgSize="100% 100%"
                            bgPos="center"
                            w="90%"
                            m='0 auto'
                            mt='10%'
                        // h='100%'
                        >
                            <Box
                                display={"flex"}
                                justifyContent={"space-around"}
                                w="80%"
                                m="0 auto"
                                // mt='60px'
                                pt="4%"
                                pb="4%"
                            >
                                <Box textAlign={'center'} onClick={() => { window.location.href = 'https://twitter.com/UneWeb3'; }}>
                                    <Image
                                        src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20225.png"
                                        w="40%"
                                        m={'0 auto'}
                                    ></Image>
                                    UneMeta
                                </Box>
                                <Box textAlign={'center'} onClick={() => { window.location.href = 'http://hyletic.ai'; }} >
                                    <Image
                                        src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20227.png"
                                        w="40%"
                                        m={'0 auto'}
                                    ></Image>
                                    Opencoord
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            bgImg={
                                "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%2099%20%281%29.png"
                            }
                            bgRepeat="no-repeat"
                            bgSize="100% 100%"
                            bgPos="center"
                            w="90%"
                            m='0 auto'
                            mt='10%'
                        >
                            <Box
                                display={"flex"}
                                justifyContent={"space-around"}
                                m="0 auto"
                                w="45%"
                                pt="4%"
                                pb="4%"
                            >
                                <Box textAlign={'center'} onClick={() => { window.location.href = 'https://www.unemeta.com'; }}>
                                    <Image
                                        src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20227%20%281%29.png"
                                        w="40%"
                                        m={'0 auto'}
                                    ></Image>
                                    UneMeta
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            )}
            {page === 4 && <Box textShadow={"0px 3px 0px #000000"} color="#fff" fontWeight={"900"} fontFamily={"Lantinghei"}>
                <Box
                    bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%2018%20%281%29.png'}
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    bgPos="left top"
                    w={'100%'}
                    minHeight={'100vh'}
                    // pt="4%"
                    // pb="4%"
                    color="#fff"
                    pt='10%'
                    pb='10%'
                >
                    <Box
                    
                        w="90%"
                        pos={'absolute'}
                        top={'4%'}
                        left={'4%'}
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={"center"}
                    >

                        <Image
                            src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20228.png"
                            w="14%"
                            // pos={'absolute'}
                            // top={'4%'}
                            // left={'4%'}
                            onClick={() => setPage(3)}
                        ></Image>
                        <Box>设置</Box>
                        <Image
                            src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20210.png"
                            w="14%"
                            // pos={'absolute'}
                            // top={'4%'}
                            // left={'4%'}
                            onClick={() => setPage(3)}
                        ></Image>
                    </Box>
                    <Box w='100%' m='0 auto' mt='50%' color='#fff' fontFamily={'Lantinghei'}>
                        <Box
                            bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205.png'}
                            bgRepeat="no-repeat"
                            bgSize="100% 100%"
                            bgPos="center"
                            w='90%'
                            // h='56px'
                            m='0 auto'
                            mt='20px'
                            display='flex'
                            justifyContent={'center'}
                            alignItems={"center"}
                            p={'6% 6% 8% 6%'}
                            onClick={onOpen}
                        >
                            Privacy Policy
                        </Box>
                        <Box
                            bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205.png'}
                            bgRepeat="no-repeat"
                            bgSize="100% 100%"
                            bgPos="center"
                            w='90%'
                            // h='56px'
                            m='0 auto'
                            mt='20px'
                            display='flex'
                            justifyContent={'center'}
                            alignItems={"center"}
                            p={'6% 6% 8% 6%'}
                            onClick={onContact}
                        >
                            Help and Support
                        </Box>
                    </Box>
                </Box>
                <Modal
                    onClose={closeContact}
                    isCentered={true}
                    isOpen={openContact}
                    scrollBehavior={'inside'}

                >
                    <ModalOverlay />
                    <ModalContent
                    
                    bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%20101.png'}
                    bgRepeat="no-repeat"
                    bgSize="100% 100%"
                    m='6%'
                    pb='6%'
                    color='#fff'
                    >
                        <ModalHeader>Contact us</ModalHeader>
                        
                        <Image
                            src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20225%20%281%29.png"
                            w="8%"
                            pos={'absolute'}
                            top={'2%'}
                            right={'2%'}
                            onClick={closeContact}
                        ></Image>
                        <ModalBody>
                            <Box m='0 auto' display={'flex'} w='60%' justifyContent={'space-between'}>

                                <Image
                                    src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Frame%20163310.png"
                                    w="20%"
                                    onClick={() => { window.location.href = 'https://twitter.com/UneWeb3'; }}
                                ></Image>
                                <Image
                                    src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Union.png"
                                    w="20%"
                                    // onClick={onClose}
                                ></Image>
                            </Box>
                        </ModalBody>
                    </ModalContent>
                </Modal>
                <Modal
                    onClose={onClose}
                    isCentered={true}
                    isOpen={isOpen}
                    scrollBehavior={'inside'}
                >
                    <ModalOverlay />
                    <ModalContent 
                    bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%20101.png'}
                    bgRepeat="no-repeat"
                    bgSize="100% 100%"
                    m='6%'
                    pb='6%'
                    color='#fff'
                    >
                        <ModalHeader>Privacy Policy</ModalHeader>
                        {/* <ModalCloseButton /> */}
                        <Image
                            src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20225%20%281%29.png"
                            w="8%"
                            pos={'absolute'}
                            top={'2%'}
                            right={'2%'}
                            onClick={onClose}
                        ></Image>
                        <ModalBody>
                            Effective Date: April 19th, 2024
                            <br />
                            <br />
                            Thank you for playing our games! This Privacy Policy describes:
                            <br />
                            - The data we collect about you
                            <br />
                            - How we protect your data
                            <br />
                            <br />
                            <Text fontSize='18px' fontWeight='700'>THE DATA WE COLLECT</Text>
                            <br />
                            Data you provide us directly.
                            <br />
                            Contact information (such as email address)
                            <br />
                            Player name or tag
                            <br />
                            Profile information
                            <br />
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
                            <br />
                            <Text fontSize='18px' fontWeight='700'>HOW DO WE PROTECT YOUR DATA</Text>
                            
                            <br />
                            Security Safeguards.
                            <br />
                            In order to help ensure a secure and safe player experience, we are continuously developing and implementing administrative, technical and physical security measures to protect your data from unauthorized access or against loss, misuse or alteration.
                            <br />
                            <br />
                            Data retention.
                            <br />
                            We retain your data for as long as your account is active or as needed to provide you with the Service.
                            Note that if you ask us to remove your personal data, we will retain your data as necessary for our legitimate business interests, such as to comply with our legal obligations, resolve disputes, and enforce our agreements.
                            <br />
                            <br />
                            <Text fontSize='18px' fontWeight='700'>COOKIES AND SIMILAR TECHNOLOGIES</Text>
                            
                            <br />
                            We and our partners collect and store information about users&apos; interactions with unaffiliated websites and applications that use our technologies, including cookies and similar tracking technologies. This allows us to infer the presence of a common user or household behind multiple devices or browsers, for instance, and then link those browsers and devices into a device graph. We do so in order to
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
                        {/* <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter> */}
                    </ModalContent>
                </Modal>
            </Box>
            }
        </Box>
        // <Box textShadow={"0px 1px 0px #000000"} color="#fff" fontWeight={"700"}>
        //     {page === 1 && (
        //         <Box
        //             bg="#1a1a1a"
        //             w={width}
        //             h={height}
        //             display={"flex"}
        //             justifyContent={"center"}
        //             alignItems={"center"}
        //         >
        //             <Image w='50%' src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Frame%20198.png"></Image>
        //         </Box>
        //     )}
        //     {page === 2 && (
        //         <Box
        //             bgImg={
        //                 "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%2018.png"
        //             }
        //             bgRepeat="no-repeat"
        //             bgSize="100% 100%"
        //             bgPos="center"
        //             w={width}
        //             h={height}
        //             overflow={"hidden"}
        //             color={"#fff"}
        //         >
        //             <Image
        //                 src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20207.png"
        //                 w={"100%"}
        //                 pos={"absolute"}
        //                 top={"0"}
        //             ></Image>
        //             <Image
        //                 src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Frame%20163307.png"
        //                 w={"100%"}
        //                 h={'38%'}
        //                 // pos={'absolute'}
        //                 mt={"8%"}
        //             ></Image>
        //             <Box textAlign={"center"} mt={"1%"}>
        //                 Connecting to server...
        //             </Box>
        //             <Box
        //                 w={"80%"}
        //                 bgImg={
        //                     "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Mask%20group.png"
        //                 }
        //                 bgRepeat="no-repeat"
        //                 bgSize="100% 100%"
        //                 bgPos="center"
        //                 h={"30px"}
        //                 backgroundColor={"#3e3e3e"}
        //                 border={"1px solid #000"}
        //                 m={"0 auto"}
        //                 mt={"1%"}
        //             >
        //                 <Box
        //                     w={`${ProgressBar}%`}
        //                     bgImg={
        //                         "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Mask%20group%20%281%29.png"
        //                     }
        //                     bgRepeat="no-repeat"
        //                     bgSize="100% 100%"
        //                     bgPos="center"
        //                     h={"100%"}
        //                     transition={"all .1s linear"}
        //                     pos={"relative"}
        //                 >
        //                     <Box pos={"absolute"} right={"20px"}>{`${ProgressBar}%`}</Box>
        //                 </Box>
        //             </Box>
        //             <Image
        //                 src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20208.png"
        //                 w={"100%"}
        //                 pos={"absolute"}
        //                 bottom={"0"}
        //             ></Image>
        //         </Box>
        //     )}
        //     {page === 3 && (
        //         <Box
        //             bgImg={
        //                 "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/gameBg.png"
        //             }
        //             bgRepeat="no-repeat"
        //             bgSize="100% 100%"
        //             bgPos="center"
        //             w={width}
        //             h={height}
        //             pt="4%"
        //             pb="4%"
        //             color="#fff"
        //             // fontSize={'10px'}
        //             fontFamily={"Lantinghei"}
        //         >
        //             <Box w="80%" h="100%" m={"0 auto"} display={"flex"} color="#fff">
        //                 <Box w="62%" >
        //                     <Box display={"flex"} h={'20%'}>
        //                         <Box
        //                             bgImg={
        //                                 "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%2099.png"
        //                             }
        //                             bgRepeat="no-repeat"
        //                             bgSize="100% 100%"
        //                             bgPos="center"
        //                             w="50%"
        //                             h='100%'
        //                         >
        //                             <Box
        //                                 display={"flex"}
        //                                 justifyContent={"space-around"}
        //                                 w="80%"
        //                                 m="0 auto"
        //                                 // mt='60px'
        //                                 pt="4%"
        //                                 pb="4%"
        //                             >
        //                                 <Box textAlign={'center'} onClick={() => {window.location.href = 'https://twitter.com/UneWeb3';}}>
        //                                     <Image
        //                                         src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20225.png"
        //                                         w="30%"
        //                                         m={'0 auto'}
        //                                     ></Image>
        //                                     UneMeta
        //                                 </Box>
        //                                 <Box textAlign={'center'} >
        //                                     <Image
        //                                         src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20227.png"
        //                                         w="30%"
        //                                         m={'0 auto'}
        //                                     ></Image>
        //                                     Opencoord
        //                                 </Box>
        //                             </Box>
        //                         </Box>
        //                         <Box
        //                             bgImg={
        //                                 "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%20100.png"
        //                             }
        //                             bgRepeat="no-repeat"
        //                             bgSize="100% 100%"
        //                             bgPos="center"
        //                             w="50%"
        //                             h='100%'
        //                         >
        //                             <Box
        //                                 display={"flex"}
        //                                 justifyContent={"space-around"}
        //                                 m="0 auto"
        //                                 w="45%"
        //                                 pt="4%"
        //                                 pb="4%"
        //                             >
        //                                 <Box textAlign={'center'} onClick={() => {window.location.href = 'https://www.unemeta.com';}}>
        //                                     <Image
        //                                         src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20227%20%281%29.png"
        //                                         w="30%"
        //                                         m={'0 auto'}
        //                                     ></Image>
        //                                     UneMeta
        //                                 </Box>
        //                             </Box>
        //                         </Box>
        //                     </Box>
        //                     <Image
        //                         src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20223.png"
        //                         w="97%"
        //                         h={'56%'}
        //                         ml={"4%"}
        //                         mt="1%"
        //                     ></Image>
        //                     <LoginModal loggedInHandler={goPlay}>
        //                         <PlayButton />
        //                     </LoginModal>
        //                 </Box>

        //                 <Box
        //                     bgImg={
        //                         "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%2098.png"
        //                     }
        //                     bgRepeat="no-repeat"
        //                     bgSize="100% 100%"
        //                     bgPos="center"
        //                     w="38%"
        //                     p={"2% 4% 2% 3%"}
        //                     display={"flex"}
        //                     flexWrap={"wrap"}
        //                 >
        //                     {
        //                         boardInfo?.map((val: any) => <>
        //                             {val?.rank === 1 && <Box
        //                                 bgImg={
        //                                     "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205%20%283%29.png"
        //                                 }
        //                                 bgRepeat="no-repeat"
        //                                 bgSize="100% 100%"
        //                                 bgPos="center"
        //                                 w="50%"
        //                                 h="26%"
        //                                 // display={'flex'}
        //                                 // justifyContent={'space-around'}
        //                                 // alignItems={'center'}
        //                                 p="3% 2% 4% 4%"
        //                                 ml={"24%"}
        //                             >
        //                                 <Box pos={'absolute'}>{val?.rank}</Box>
        //                                 <Image
        //                                     src={val?.avatar}
        //                                     w={"24%"}
        //                                     m={"0 auto"}
        //                                 ></Image>
        //                                 <Box textAlign={"center"}>{val?.nick_name}</Box>
        //                                 <Box display={"flex"} justifyContent={"center"}>
        //                                     <Image
        //                                         src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png"
        //                                         w={"18%"}
        //                                     ></Image>
        //                                     <Box color='#FFC42C'>{val?.score}</Box>
        //                                 </Box>
        //                             </Box>}
        //                             {val?.rank === 2 && <Box
        //                                 bgImg={
        //                                     "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205%20%282%29.png"
        //                                 }
        //                                 bgRepeat="no-repeat"
        //                                 bgSize="100% 100%"
        //                                 bgPos="center"
        //                                 w="50%"
        //                                 h="26%"
        //                                 // display={'flex'}
        //                                 // justifyContent={'space-around'}
        //                                 // alignItems={'center'}
        //                                 p="3% 2% 4% 4%"
        //                             >
        //                                 <Box pos={'absolute'}>{val?.rank}</Box>
        //                                 <Image
        //                                     src={val?.avatar}
        //                                     w={"24%"}
        //                                     m={"0 auto"}
        //                                 ></Image>
        //                                 <Box textAlign={"center"}>{val?.nick_name}</Box>
        //                                 <Box display={"flex"} justifyContent={"center"}>
        //                                     <Image
        //                                         src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png"
        //                                         w={"18%"}
        //                                     ></Image>
        //                                     <Box color='#FFC42C'>{val?.score}</Box>
        //                                 </Box>
        //                             </Box>}
        //                             {val?.rank === 3 && <Box
        //                                 bgImg={
        //                                     "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205%20%284%29.png"
        //                                 }
        //                                 bgRepeat="no-repeat"
        //                                 bgSize="100% 100%"
        //                                 bgPos="center"
        //                                 w="50%"
        //                                 h="26%"
        //                                 // display={'flex'}
        //                                 // justifyContent={'space-around'}
        //                                 // alignItems={'center'}
        //                                 p="3% 2% 4% 4%"
        //                             >
        //                                 <Box pos={'absolute'}>{val?.rank}</Box>
        //                                 <Image
        //                                     src={val?.avatar}
        //                                     w={"24%"}
        //                                     m={"0 auto"}
        //                                 ></Image>
        //                                 <Box textAlign={"center"}>{val?.nick_name}</Box>
        //                                 <Box display={"flex"} justifyContent={"center"}>
        //                                     <Image
        //                                         src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png"
        //                                         w={"18%"}
        //                                     ></Image>
        //                                     <Box color='#FFC42C'>{val?.score}</Box>
        //                                 </Box>
        //                             </Box>
        //                             }
        //                             {(val?.rank !== 1 && val?.rank !== 2 && val?.rank !== 3) && <Box
        //                                 bgImg={
        //                                     "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205%20%281%29.png"
        //                                 }
        //                                 bgRepeat="no-repeat"
        //                                 bgSize="100% 100%"
        //                                 bgPos="center"
        //                                 w="100%"
        //                                 h="8%"
        //                                 display={"flex"}
        //                                 justifyContent={"space-around"}
        //                                 alignItems={"center"}
        //                                 p="2% 4% 4% 2%"
        //                             >
        //                                 <Box>{val?.rank}</Box>
        //                                 <Image
        //                                     src={val?.avatar}
        //                                     h={"100%"}
        //                                 ></Image>
        //                                 <Box>{val?.nick_name}</Box>
        //                                 <Image
        //                                     src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png"
        //                                     h={"100%"}
        //                                 ></Image>
        //                                 <Box>{val?.score}</Box>
        //                             </Box>
        //                             }
        //                         </>)
        //                     }
        //                 </Box>
        //             </Box>
        //         </Box>
        //     )}
        // </Box>
    );
}

export default Page;
