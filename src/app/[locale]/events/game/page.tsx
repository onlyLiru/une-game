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
            >

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
      </Box>
    </Box>
  )
}

export default page