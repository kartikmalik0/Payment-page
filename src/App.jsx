import { Box, Center, Container, Flex, HStack, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { LeftComponent } from './Components/LeftComponent'
import { RightComponent } from './Components/RightComponent'

const App = ({children}) => {
 
  return (
    <Box bg="fff" minHeight="100vh" display="flex" alignItems="center" justifyContent="center" w={'full'} >
    <Container   p={6} rounded="md" boxShadow="xl" bg="white" height={'80%'}  maxW={'50%'} minW={'50rem'} flex={'2'}  border={'1px solid #ddd'}>
        <Box display={'flex'} gap={10} justifyContent={'space-between'} >
          {/* <LeftComponent /> */}
          <Box display={'flex'} flexDir={'column'} flex={'1'}>
            {children}
          </Box>
          <RightComponent/>
        </Box>
    </Container>
  </Box>
  )
}

export default App
