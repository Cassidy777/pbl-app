// pages/index.js
import React from 'react';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardBody, 
  Text, 
  Heading, 
  Box, 
  Stack, 
  StackDivider,
  Flex,
  Avatar
} from '@chakra-ui/react';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';

export default function Home() {
  return (
    <> 
      <Card>
        <CardHeader>
        <Heading size='md'>自己紹介</Heading>
          <Flex gap='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://nekonavi.jp/wp-content/uploads/2015/06/image82.jpg' />
              <Box>
                <Heading size='sm'>Cassidy</Heading>
                <Text>Iyatomi lab</Text>
              </Box>
            </Flex>
          </Flex>

        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box bg='red.100' p='4' borderRadius='md'>
              <Heading size='xs' textTransform='uppercase'>
                好きな食べ物
              </Heading>
              <Text pt='2' fontSize='sm'>
                ラーメン
              </Text>
            </Box>
            <Box bg='green.100' p='4' borderRadius='md'>
              <Heading size='xs' textTransform='uppercase'>
                趣味
              </Heading>
              <Text pt='2' fontSize='sm'>
                街歩き
              </Text>
            </Box>
            <Box bg='blue.100' p='4' borderRadius='md'>
              <Heading size='xs' textTransform='uppercase'>
                やっているバイト
              </Heading>
              <Text pt='2' fontSize='sm'>
                塾バイト,　居酒屋バイト
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>

      <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
      Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
      Comment
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
      Share
    </Button>

    </>
  );
}
