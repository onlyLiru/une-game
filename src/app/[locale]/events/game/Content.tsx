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
    ModalCloseButton,
    Modal,
    Tooltip,
    Progress,
    Link,
} from "@chakra-ui/react";
import { useRouter, redirect } from "next/navigation";
import { getBoardData } from "@/services/user";
import LoginModal from "./LoginModal";

function Page() {
    const [width, setWidth] = useState<any>(0);
    const [height, setHeight] = useState<any>(0);
    const [page, setPage] = useState<any>(1);
    const [ProgressBar, updateProgressBar] = useState<any>(0);
    const [boardInfo, setBoardInfo] = useState<any>([]);
    const router = useRouter();
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


    function handleOrientationChange() {
        const width = document.documentElement.clientWidth;
        const height = document.documentElement.clientHeight;
        console.log(width)
        console.log(height)
        setWidth(width)
        setHeight(height)

    }
    useEffect(() => {
        initBoard()
        handleOrientationChange()
    }, []);

    const PlayButton = () => (
        <Box
            bgImg={
                "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205.png"
            }
            bgRepeat="no-repeat"
            bgSize="100% 100%"
            bgPos="center"
            w="45%"
            h="35px"
            m="0 auto"
            mt="1%"
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
        >
            PLAY
        </Box>
    );

    return (
        <Box textShadow={"0px 2px 0px #000000"} color="#fff" fontWeight={"900"}>
            {page === 1 && (
                <Box
                    bg="#1a1a1a"
                    w={width}
                    h={height}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Image w='50%' src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Frame%20198.png"></Image>
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
                    w={width}
                    h={height}
                    overflow={"hidden"}
                    color={"#fff"}
                >
                    <Image
                        src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20207.png"
                        w={"100%"}
                        pos={"absolute"}
                        top={"0"}
                    ></Image>
                    <Image
                        src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Frame%20163307.png"
                        w={"100%"}
                        h={'38%'}
                        // pos={'absolute'}
                        mt={"8%"}
                    ></Image>
                    <Box textAlign={"center"} mt={"1%"}>
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
                        h={"30px"}
                        backgroundColor={"#3e3e3e"}
                        border={"1px solid #000"}
                        m={"0 auto"}
                        mt={"1%"}
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
                        src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20208.png"
                        w={"100%"}
                        pos={"absolute"}
                        bottom={"0"}
                    ></Image>
                </Box>
            )}
            {page === 3 && (
                <Box
                    bgImg={
                        "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/gameBg.png"
                    }
                    bgRepeat="no-repeat"
                    bgSize="100% 100%"
                    bgPos="center"
                    w={width}
                    h={height}
                    pt="4%"
                    pb="4%"
                    color="#fff"
                    fontSize={'10px'}
                    fontFamily={"Lantinghei"}
                >
                    <Box w="80%" h="100%" m={"0 auto"} display={"flex"} color="#fff">
                        <Box w="62%" >
                            <Box display={"flex"} h={'20%'}>
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
                            </Box>
                            <Image
                                src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20223.png"
                                w="97%"
                                h={'56%'}
                                ml={"4%"}
                                mt="1%"
                            ></Image>
                            <LoginModal loggedInHandler={goPlay}>
                                <PlayButton />
                            </LoginModal>
                        </Box>

                        <Box
                            bgImg={
                                "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%2098.png"
                            }
                            bgRepeat="no-repeat"
                            bgSize="100% 100%"
                            bgPos="center"
                            w="38%"
                            p={"2% 4% 2% 3%"}
                            display={"flex"}
                            flexWrap={"wrap"}
                        >
                            {
                                boardInfo?.map(res => <>
                                    {res?.rank === 1 && <Box
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
                                        <Box pos={'absolute'}>{res?.rank}</Box>
                                        <Image
                                            src={res?.avatar}
                                            w={"24%"}
                                            m={"0 auto"}
                                        ></Image>
                                        <Box textAlign={"center"}>{res?.nick_name}</Box>
                                        <Box display={"flex"} justifyContent={"center"}>
                                            <Image
                                                src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png"
                                                w={"18%"}
                                            ></Image>
                                            <Box color='#FFC42C'>{res?.score}</Box>
                                        </Box>
                                    </Box>}
                                    {res?.rank === 2 && <Box
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
                                        <Box pos={'absolute'}>{res?.rank}</Box>
                                        <Image
                                            src={res?.avatar}
                                            w={"24%"}
                                            m={"0 auto"}
                                        ></Image>
                                        <Box textAlign={"center"}>{res?.nick_name}</Box>
                                        <Box display={"flex"} justifyContent={"center"}>
                                            <Image
                                                src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png"
                                                w={"18%"}
                                            ></Image>
                                            <Box color='#FFC42C'>{res?.score}</Box>
                                        </Box>
                                    </Box>}
                                    {res?.rank === 3 && <Box
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
                                        <Box pos={'absolute'}>{res?.rank}</Box>
                                        <Image
                                            src={res?.avatar}
                                            w={"24%"}
                                            m={"0 auto"}
                                        ></Image>
                                        <Box textAlign={"center"}>{res?.nick_name}</Box>
                                        <Box display={"flex"} justifyContent={"center"}>
                                            <Image
                                                src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png"
                                                w={"18%"}
                                            ></Image>
                                            <Box color='#FFC42C'>{res?.score}</Box>
                                        </Box>
                                    </Box>
                                    }
                                    {(res?.rank !== 1 && res?.rank !== 2 && res?.rank !== 3) && <Box
                                        bgImg={
                                            "https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205%20%281%29.png"
                                        }
                                        bgRepeat="no-repeat"
                                        bgSize="100% 100%"
                                        bgPos="center"
                                        w="100%"
                                        h="8%"
                                        display={"flex"}
                                        justifyContent={"space-around"}
                                        alignItems={"center"}
                                        p="2% 4% 4% 2%"
                                    >
                                        <Box>{res?.rank}</Box>
                                        <Image
                                            src={res?.avatar}
                                            h={"100%"}
                                        ></Image>
                                        <Box>{res?.nick_name}</Box>
                                        <Image
                                            src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png"
                                            h={"100%"}
                                        ></Image>
                                        <Box>{res?.score}</Box>
                                    </Box>
                                    }
                                </>)
                            }
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    );
}

export default Page;
