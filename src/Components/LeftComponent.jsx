import { Box, Button, Checkbox, Divider, Flex, FormControl, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'

export const LeftComponent = () => {
  return (
    <Box display={'flex'} flexDir={'column'} flex={'1'}>
        <Box mb={9}>
            <Text fontSize={27} fontWeight={'bold'}>Payment Details</Text>
        </Box>
        <FormControl mb={4}>
         <FormLabel color={'gray.400'}>Email address</FormLabel>
  <Input type='email' />
</FormControl>
<FormControl mb={4}>
      <FormLabel  color={'gray.400'} >Credit Card Number</FormLabel>
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
  <FormControl  color={'gray.400'} mb={4}>
      <FormLabel>Expiration Date</FormLabel>
      <Input
        width="100%"
        placeholder="MM/YY"
        
      />
    </FormControl>
  </Box>
  <Box flex="1" ml={2}>
  <FormControl mb={4}>
      <FormLabel  color={'gray.400'}>CVV</FormLabel>
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
<Checkbox mb={4}  color={'gray.400'} >I accept ....</Checkbox>

<Box>
<Flex mb={4} justify={'space-between'}>
  <Text  color={'gray.400'}>Subtotal</Text>
  <Text>$65</Text>
</Flex>
<Flex mb={4} justify={'space-between'}>
  <Text  color={'gray.400'}>Subtotal</Text>
  <Text>$65</Text>
</Flex>
</Box>
<Divider mb={4} />
<Flex mb={4} justify={'space-between'}>
  <Text  color={'gray.400'}>Total</Text>
  <Text>$120</Text>
</Flex>
<Button w={'full'} colorScheme={'blue'}>Make Payment</Button>
    </Box>
  )
}
