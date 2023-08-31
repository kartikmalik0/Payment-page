import { Box, Button, Checkbox, Divider, Flex, FormControl, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'
import App from '../App';
import Heading from './Payment Pages/Heading';
import PayButton from './Payment Pages/PayButton';

export const LeftComponent = () => {
  return (
    <App>
    <Box >
        <Heading/>
        <FormControl mb={4}>
         <FormLabel color={'gray.500'}>Email address</FormLabel>
  <Input type='email' />
</FormControl>
<FormControl mb={4}>
      <FormLabel  color={'gray.500'} >Credit Card Number</FormLabel>
      <Input
        width="100%"
        type="text"
        placeholder="**** **** ****"
        maxLength={19}
        onChange={(e) => {
          const value = e.target.value;
          const formattedValue = value
            .replace(/\s/g, '')
            .replace(/(\d{4})(?=\d)/g, '$1 ');
          e.target.value = formattedValue;
        }}
      />
    </FormControl>
<Flex>
  <Box flex="1" mr={2}>
  <FormControl  color={'gray.500'} mb={4}>
      <FormLabel>Expiration Date</FormLabel>
      <Input
        width="100%"
        placeholder="MM/YY"
        
      />
    </FormControl>
  </Box>
  <Box flex="1" ml={2}>
  <FormControl mb={4}>
      <FormLabel  color={'gray.500'}>CVV</FormLabel>
      <Input
        width="100%"
        type="text"
        placeholder="123"
        maxLength={4}
        onChange={(e) => {
          const value = e.target.value;
          const formattedValue = value.replace(/\s/g, '');
          e.target.value = formattedValue;
        }}
      />
    </FormControl>
  </Box>
</Flex>
<Checkbox mb={4}  color={'gray.500'} >I accept ....</Checkbox>

<Box>
<Flex mb={4} justify={'space-between'}>
  <Text  color={'gray.500'}>Subtotal</Text>
  <Text>$65</Text>
</Flex>
<Flex mb={4} justify={'space-between'}>
  <Text  color={'gray.500'}>Platform fee</Text>
  <Text>$65</Text>
</Flex>
</Box>
<Divider mb={4} />
<Flex mb={4} justify={'space-between'}>
  <Text  color={'gray.500'}>Total</Text>
  <Text>$120</Text>
</Flex>
<PayButton name={'Make Payment'}/>
    </Box>
    </App>
  )
}
