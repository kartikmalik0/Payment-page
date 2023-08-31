import React, { useEffect, useState } from 'react'
import App from '../../App'
import Heading from './Heading'
import PayButton from './PayButton'
import { Box, Image, Input, List, ListItem, Switch, Text, UnorderedList } from '@chakra-ui/react'

const Images = [
    "public/gpay.png",
    "public/phonepay.png",
    "public/pngwing.com.png",
    "public/upi.png"
]

const Upi = () => {

    const [update , setUpdate] = useState(0)
    useEffect(() => {
        console.log(update);
    },[update]);
  return (
    <App >
        <Box border={'1px solid #ddd'} padding={3} borderRadius={'8px'}>
        <Heading/>
          <Input
          placeholder='E.g: 1234567890@.upi'
          />
          <Box display={'flex'} justifyContent={'space-between'} mt={3} mb={3}>
            <Text color={'gray.500'}>Save this UPI for checkout</Text>
            <Switch/>
          </Box>
        <PayButton name={'Verify'} onclick={setUpdate} />
        <Box>
            <Box display={'flex'} flexDir={'row'} justifyContent={'space-between'} alignItems={'center'} mt={6}>
                <Text fontSize={'15px'} color={'gray.500'}>100+ UPI Apps supported</Text>
                <List display={'flex'} alignItems={'center'} >
                   {Images.map((item,i)=>(
                    <ListItem key={i} >
                        <Image w={'25px'} ml={4} src={item}/>
                    </ListItem>
                   ))}
                </List>
            </Box>
            
        </Box>
        </Box>
    </App>
  )
}

export default Upi