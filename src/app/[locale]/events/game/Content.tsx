"use client";
import { useState, useMemo, useRef, useEffect } from 'react';
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
} from '@chakra-ui/react';
import useUsreInfo from "@/recoil/useUserInfo";
import useIsShowLoginModal from "@/recoil/useIsShowLoginModal";
import { useRouter, redirect } from "next/navigation";

function Page() {

    const { isLogin } = useUsreInfo();
    const { show, setShow } = useIsShowLoginModal();
    const [page, setPage] = useState<any>(1);
    const [ProgressBar, updateProgressBar] = useState<any>(0);
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
                    setPage(3)
                }, 1000);
            } else {
                currentNumber++;
                updateProgressBar(currentNumber); // 可以替换为其他操作
            }
        }, interval);
    }
    const goPlay = () => {
        console.log(isLogin)
        if (!isLogin) {
            setShow(!isLogin);
        }else {
            router.push('/events/game/play');
        }
    }
    useEffect(() => {
        if (page === 1) {
            setTimeout(() => {
                setPage(2)
            }, 1000);
        } else if (page === 2) {
            countTo100InThreeSeconds();
        } else {

        }
    }, [page]);
    return (
        <Box textShadow={'0px 3px 0px #000000'} color='#fff' fontWeight={'900'}>
            {page === 1 && <Box
                bg='#1a1a1a'
                w='100%'
                h='100vh'
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Image
                    src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Frame%20198.png'
                ></Image>
            </Box>}
            {page === 2 && <Box
                bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%2018.png'}
                bgRepeat="no-repeat"
                bgSize="100% 100%"
                bgPos="center"
                w='100%'
                h='100vh'
                overflow={'hidden'}
                color={'#fff'}
            >
                <Image
                    src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20207.png'
                    w={'100%'}
                    pos={'absolute'}
                    top={'0'}
                ></Image>
                <Image
                    src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Frame%20163307.png'
                    w={'100%'}
                    // pos={'absolute'}
                    mt={'14%'}
                ></Image>
                <Box textAlign={'center'} mt={'2%'}>Connecting to server...</Box>
                <Box
                    w={'80%'}
                    bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Mask%20group.png'}
                    bgRepeat="no-repeat"
                    bgSize="100% 100%"
                    bgPos="center"
                    h={'30px'}
                    backgroundColor={'#3e3e3e'}
                    border={'1px solid #000'}
                    m={'0 auto'}
                    mt={'1%'}
                >
                    <Box
                        w={`${ProgressBar}%`}
                        bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Mask%20group%20%281%29.png'}
                        bgRepeat="no-repeat"
                        bgSize="100% 100%"
                        bgPos="center"
                        h={'100%'}
                        transition={'all .1s linear'}
                        pos={'relative'}
                    >
                        <Box pos={'absolute'} right={'20px'}>{`${ProgressBar}%`}</Box>
                    </Box>
                </Box>
                <Image
                    src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20208.png'
                    w={'100%'}
                    pos={'absolute'}
                    bottom={'0'}
                ></Image>
            </Box>}
            {page === 3 && <Box
                bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/gameBg.png'}
                bgRepeat="no-repeat"
                bgSize="100% 100%"
                bgPos="center"
                w='100%'
                h='100vh'
                pt='80px'
                pb='80px'
                color='#fff'
                // fontSize={'30px'} 
                fontFamily={'Lantinghei'}
            >
                <Box w='80%' h='100%' m={'0 auto'} display={'flex'} color='#fff'>
                    <Box w='62%'>
                        <Box display={'flex'}>
                            <Box
                                bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%2099.png'}
                                bgRepeat="no-repeat"
                                bgSize="100% 100%"
                                bgPos="center"
                                w='50%'
                            // h='194px'
                            >
                                <Box
                                    display={'flex'}
                                    justifyContent={'space-around'}
                                    w='80%'
                                    m='0 auto'
                                    // mt='60px'
                                    pt='10%'
                                    pb='4%'
                                >
                                    <Box>
                                        <Image
                                            src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20225.png'
                                            w='90px'
                                        ></Image>
                                        UneMeta
                                    </Box>
                                    <Box>
                                        <Image
                                            src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20227.png'
                                            w='90px'
                                        ></Image>
                                        Opencoord
                                    </Box>

                                </Box>
                            </Box>
                            <Box
                                bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%20100.png'}
                                bgRepeat="no-repeat"
                                bgSize="100% 100%"
                                bgPos="center"
                                w='50%'
                            // h='194px'
                            >
                                <Box

                                    display={'flex'}
                                    justifyContent={'space-around'}
                                    m='0 auto'
                                    // mt='60px'
                                    pt='10%'
                                    pb='4%'
                                >
                                    <Box>
                                        <Image
                                            src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20227%20%281%29.png'
                                            w='90px'
                                        ></Image>
                                        UneMeta
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Image
                            src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20223.png'
                            w='97%'
                            ml={'4%'}
                            mt='20px'
                        ></Image>
                        <Box
                            bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205.png'}
                            bgRepeat="no-repeat"
                            bgSize="100% 100%"
                            bgPos="center"
                            w='400px'
                            h='62px'
                            m='0 auto'
                            mt='20px'
                            display='flex'
                            justifyContent={'center'}
                            alignItems={"center"}
                            onClick={goPlay}
                        >
                            PLAY
                        </Box>
                    </Box>

                    <Box
                        bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%2098.png'}
                        bgRepeat="no-repeat"
                        bgSize="100% 100%"
                        bgPos="center"
                        w='38%'
                        p={'4% 7% 4% 5%'}
                        display={'flex'}
                        flexWrap={'wrap'}
                    >
                        <Box
                            bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205%20%283%29.png'}
                            bgRepeat="no-repeat"
                            bgSize="100% 100%"
                            bgPos="center"
                            w='50%'
                            h='150px'
                            // display={'flex'}
                            // justifyContent={'space-around'}
                            // alignItems={'center'}
                            p='2% 1% 4% 1%'
                            ml={'24%'}

                        >
                            <Box>1</Box>
                            <Image
                                src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%207.png'
                                h={'20%'}
                                m={'0 auto'}
                            ></Image>
                            <Box textAlign={'center'}>user name</Box>
                            <Box display={'flex'} justifyContent={'center'}>

                                <Image
                                    src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png'
                                    h={'20%'}
                                ></Image>
                                <Box>10000</Box>
                            </Box>
                        </Box>
                        <Box
                            bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205%20%282%29.png'}
                            bgRepeat="no-repeat"
                            bgSize="100% 100%"
                            bgPos="center"
                            w='50%'
                            h='150px'
                            // display={'flex'}
                            // justifyContent={'space-around'}
                            // alignItems={'center'}
                            p='2% 1% 4% 1%'

                        >
                            <Box>1</Box>
                            <Image
                                src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%207.png'
                                h={'20%'}
                                m={'0 auto'}
                            ></Image>
                            <Box textAlign={'center'}>user name</Box>
                            <Box display={'flex'} justifyContent={'center'}>

                                <Image
                                    src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png'
                                    h={'20%'}
                                ></Image>
                                <Box>10000</Box>
                            </Box>
                        </Box>
                        <Box
                            bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205%20%284%29.png'}
                            bgRepeat="no-repeat"
                            bgSize="100% 100%"
                            bgPos="center"
                            w='50%'
                            h='150px'
                            // display={'flex'}
                            // justifyContent={'space-around'}
                            // alignItems={'center'}
                            p='2% 1% 4% 1%'

                        >
                            <Box>1</Box>
                            <Image
                                src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%207.png'
                                h={'20%'}
                                m={'0 auto'}
                            ></Image>
                            <Box textAlign={'center'}>user name</Box>
                            <Box display={'flex'} justifyContent={'center'}>

                                <Image
                                    src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png'
                                    h={'20%'}
                                ></Image>
                                <Box>10000</Box>
                            </Box>
                        </Box>
                        <Box
                            bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205%20%281%29.png'}
                            bgRepeat="no-repeat"
                            bgSize="100% 100%"
                            bgPos="center"
                            w='100%'
                            h='48px'
                            display={'flex'}
                            justifyContent={'space-around'}
                            alignItems={'center'}
                            p='2% 1% 4% 1%'
                        >
                            <Box>1</Box>
                            <Image
                                src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%207.png'
                                h={'100%'}
                            ></Image>
                            <Box>user name</Box>
                            <Image
                                src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png'
                                h={'100%'}
                            ></Image>
                            <Box>10000</Box>
                        </Box>
                        <Box
                            bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205%20%281%29.png'}
                            bgRepeat="no-repeat"
                            bgSize="100% 100%"
                            bgPos="center"
                            w='100%'
                            h='48px'
                            display={'flex'}
                            justifyContent={'space-around'}
                            alignItems={'center'}
                            p='2% 1% 4% 1%'
                        >
                            <Box>1</Box>
                            <Image
                                src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%207.png'
                                h={'100%'}
                            ></Image>
                            <Box>user name</Box>
                            <Image
                                src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png'
                                h={'100%'}
                            ></Image>
                            <Box>10000</Box>
                        </Box>
                        <Box
                            bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205%20%281%29.png'}
                            bgRepeat="no-repeat"
                            bgSize="100% 100%"
                            bgPos="center"
                            w='100%'
                            h='48px'
                            display={'flex'}
                            justifyContent={'space-around'}
                            alignItems={'center'}
                            p='2% 1% 4% 1%'
                        >
                            <Box>1</Box>
                            <Image
                                src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%207.png'
                                h={'100%'}
                            ></Image>
                            <Box>user name</Box>
                            <Image
                                src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png'
                                h={'100%'}
                            ></Image>
                            <Box>10000</Box>
                        </Box>
                        <Box
                            bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205%20%281%29.png'}
                            bgRepeat="no-repeat"
                            bgSize="100% 100%"
                            bgPos="center"
                            w='100%'
                            h='48px'
                            display={'flex'}
                            justifyContent={'space-around'}
                            alignItems={'center'}
                            p='2% 1% 4% 1%'
                        >
                            <Box>1</Box>
                            <Image
                                src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%207.png'
                                h={'100%'}
                            ></Image>
                            <Box>user name</Box>
                            <Image
                                src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png'
                                h={'100%'}
                            ></Image>
                            <Box>10000</Box>
                        </Box>
                        <Box
                            bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%205%20%281%29.png'}
                            bgRepeat="no-repeat"
                            bgSize="100% 100%"
                            bgPos="center"
                            w='100%'
                            h='48px'
                            display={'flex'}
                            justifyContent={'space-around'}
                            alignItems={'center'}
                            p='2% 1% 4% 1%'
                        >
                            <Box>1</Box>
                            <Image
                                src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Rectangle%207.png'
                                h={'100%'}
                            ></Image>
                            <Box>user name</Box>
                            <Image
                                src='https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/Group%20205.png'
                                h={'100%'}
                            ></Image>
                            <Box>10000</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>}

        </Box>
    )
}

export default Page