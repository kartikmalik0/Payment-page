import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect = () => {
    const navigate = useNavigate()
    useEffect(()=>navigate('/card'),[])
  return (
    <Box>Redirecting...  You to Payment Page</Box>
  )
}

export default Redirect