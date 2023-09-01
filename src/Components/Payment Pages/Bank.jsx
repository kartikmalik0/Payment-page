import React from 'react'
import App from '../../App'

import { Box, IconButton, Image, Input, Text } from '@chakra-ui/react'
import Heading from './Heading'
import {AiOutlineSearch} from 'react-icons/ai'
import PayButton from './PayButton'

const Banks = [
    {
      "name": "Axis Bank",
      "logoUrl": "https://w7.pngwing.com/pngs/509/329/png-transparent-axis-bank-connaught-place-new-delhi-security-business-bank-purple-angle-violet-thumbnail.png"
    },
    {
      "name": "ICICI Bank",
      "logoUrl": "https://companieslogo.com/img/orig/IBN-af38b5c0.png?t=1648383607"
    },
    {
      "name": "HDFC Bank",
      "logoUrl": "https://e7.pngegg.com/pngimages/257/159/png-clipart-hdfc-logo-thumbnail-bank-logos-thumbnail.png"
    },
    {
      "name": "State Bank of India",
      "logoUrl": "https://wordzz.com/wp-content/uploads/2016/10/sbi.jpg"
    },
    {
      "name": "Bank of Baroda",
      "logoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8KNlc-SC_e0Itrb3GdBMSVek-0DhAj5XagT9pwh8B564hrQ-7GajhZgTgThd2bzhHPG0&usqp=CAU"
    },
    {
      "name": "Kotak Mahindra Bank",
      "logoUrl": "https://zerocreativity0.files.wordpress.com/2016/05/kotak-logo.jpg?w=736"
    },
    {
      "name": "Punjab National Bank",
      "logoUrl": "https://assets.stickpng.com/images/627ccea41b2e263b45696abd.png"
    },
    {
      "name": "Canara Bank",
      "logoUrl": "https://assets.stickpng.com/images/627cc63b1b2e263b45696a91.png"
    }
  ]
  


export const Bank = () => {
  return (
    <App>
        <Box>
            <Heading/>
            <Box display="flex" alignItems="center" border="1px solid #ccc" borderRadius="5px" >
      <Input type="text" placeholder="Search your Bank..."  border="none" outline="none" padding="5px" width={'100%'}/>
      <IconButton icon={<AiOutlineSearch size={25} />}  ml="2" background={'white'} borderRadius={'full'}  />
    </Box>
    <Box border={'1px solid #ddd'} height={'auto'} mt={'40px'} display={'flex'} flexWrap={'wrap'} gap={3} padding={3}  justifyContent={'center'}>
    {Banks.map((bank,i) => (
        <Box key={i}  padding={'8px'} border={'0px solid #ddd'} width={'4.5rem'} height={''}  >
            <Box overflow={'hidden'} background={"white"} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Image src={bank.logoUrl} height={'3rem'} />
            </Box>
            <Box>
                <Text isTruncated maxWidth="80px" fontSize={'13px'} mt={'2px'} color={'gray.600'}> {bank.name}</Text>
            </Box>
        </Box>
    ))}
</Box>


    <Box mt={'40px'}>
        <PayButton name={'Proceed'}/>
    </Box>
    
</Box>
    </App>
  )
}
