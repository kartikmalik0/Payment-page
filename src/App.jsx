import { Box, Center, Container, Flex, HStack, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { LeftComponent } from './Components/LeftComponent'
import { RightComponent } from './Components/RightComponent'

const App = ({ children }) => {

    return (
        <Box bg="#fff" minHeight="100vh" display="flex" alignItems="center" justifyContent="center" >
            <Container flexDirection={'column'} p={6} rounded="md" boxShadow="xl" bg="white" minW={{ base: '375px', sm: '500px', md: '780px' }} flex={'2'} border={'1px solid #ddd'}>
                <Box display={'flex'} gap={10} justifyContent={'space-between'} flexDirection={{ base: 'column-reverse', sm: 'column-reverse', md: 'row' }} >
                    {/* <LeftComponent /> */}
                    <Box display={'flex'} flexDir={'column'} flex={'1'}>
                        {children}
                    </Box>
                    <RightComponent />
                </Box>
            </Container>
        </Box>
    )
}

export default App
