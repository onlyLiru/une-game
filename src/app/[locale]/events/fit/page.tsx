import React from 'react'
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
  Link,
} from '@chakra-ui/react';

function page() {
  return (
    <Box>
      <Box
        bgImg={'https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events/game/gameBg.png'}
        bgRepeat="no-repeat"
        bgSize="100% 100%"
        bgPos="center"
        w='100%'
        h='100vh'
        pt='80px'
        pb='80px'
      >
        <Box w='50%' m='0 auto' color='#fff' fontSize={'30px'} fontFamily={'Lantinghei'}>
          <Box
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
            服务条款
          </Box>
          <Box
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
            隐私与保护
          </Box>
          <Box
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
            帮助与支持
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default page