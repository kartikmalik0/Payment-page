import { Box, Center, Container, Flex, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { LeftComponent } from './Components/LeftComponent'
import { RightComponent } from './Components/RightComponent'

const App = () => {
  return (
    <Box bg="fff" minHeight="100vh" display="flex" alignItems="center" justifyContent="center" w={'full'} >
    <Container   p={6} rounded="md" boxShadow="xl" bg="white" height={'80%'}  maxW={'50%'} minW={'507px'} flex={'2'} >
        <Box display={'flex'} gap={10} justifyContent={'space-between'} >
          <LeftComponent/>
          <RightComponent/>
        </Box>
    </Container>
  </Box>
  )
}

export default App
      