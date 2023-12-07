import {Box,Button,HStack,Heading,Stack, VStack,Input,Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'
import {CgYoutube,CgInstagram} from 'react-icons/cg'
import { DiGithubBadge } from 'react-icons/di'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color="white">

<Stack direction={['column','row']}>
<VStack alignItems={"stretch"} w={"full"} px={"4"}>
  <Heading size="md" textTransform={"uppercase"} textAlign={"center"}>
    Subscribe to get updates
  </Heading>
  <HStack borderBottom={"2px solid white"} py={"2"}>
    <Input placeholder='enter email here...' border={"none"} borderRadius={"none"} outline={"none"} focusBorderColor='none'/>
    <Button p="0" colorScheme='purple' variant={"ghost"} borderRadius={'0 20px 20px 0'}>
      <AiOutlineSend size={20}/>
    </Button>
  </HStack>
</VStack>
<VStack w={"full"} borderLeft={["none","1px solid white"]} borderRight={["none","1px solid white"]}>
<Heading textTransform={"uppercase"} textAlign={"center"}>VIDEO HUB</Heading>
<Text>All right received</Text>
</VStack>
<VStack w={"full"}>
  <Heading size={"md"} textTransform={"uppercase"}>
    Social Media
  </Heading>
  <Button variant={"link"} colorScheme={'white'}>
    <a traget='black' href="https://youtube.com"><CgYoutube size={"20"} /></a>
  </Button>
  <Button variant={"link"} colorScheme={'white'}>
    <a traget='black' href="https://instagram.com"><CgInstagram size={"20"} /></a>
  </Button>
  <Button variant={"link"} colorScheme={'white'}>
    <a traget='black' href="https://github.com"><DiGithubBadge size={"20"} /></a>
  </Button>
</VStack>
</Stack>
    </Box>
  );
};

export default Footer