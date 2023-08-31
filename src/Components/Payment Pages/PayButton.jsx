import { Button } from '@chakra-ui/react'
import React from 'react'

const PayButton = ({name,onclick}) => {
  return (
<Button w={'full'} colorScheme={'blue'} onClick={() => onclick(1)}>{name}</Button>  )
}

export default PayButton