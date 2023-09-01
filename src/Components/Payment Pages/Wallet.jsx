import React from 'react'
import App from '../../App'
import { Box, Image, Text } from '@chakra-ui/react'
import Heading from './Heading'
import PayButton from './PayButton'

const Wallet = () => {
    const Wallets =[
        {
          "name": "PayPal",
          "logo": "https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"
        },
        {
          "name": "Apple Pay",
          "logo": "https://seeklogo.com/images/A/apple-pay-payment-mark-logo-174E25DB63-seeklogo.com.png"
        },
        {
          "name": "Google Pay",
          "logo": "https://1000logos.net/wp-content/uploads/2020/04/Google-Pay-Logo.jpg"
        },
        {
          "name": "Paytm",
          "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgNeiYPxpLIai10a8jNHOU-zP93WJRIN95CbPgOk4&s"
        },
        {
          "name": "Venmo",
          "logo": "https://1000logos.net/wp-content/uploads/2021/12/Venmo-Logo.png"
        },
        {
          "name": "Cash App",
          "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEpFWeJlD7BGfm6S-4r2zMBD-khFydm4MeVA-ITxTbQ&s"
        },
        {
          "name": "Stripe",
          "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4FZBGu0nJqdaVaQNHpdANDDOPsLcYjl07eg&usqp=CAU"
        },
        {
          "name": "Square",
          "logo": "https://w7.pngwing.com/pngs/774/540/png-transparent-square-inc-payment-gateway-point-of-sale-credit-card-credit-card.png"
        }
      ]
      
  return (
    <App>
        <Box>
            <Heading/>
            <Text color={'gray.500'}>
                Choose Your Wallet
            </Text>
            <Box border={'1px solid #ddd'} height={'auto'} mt={'20px'} display={'flex'} flexWrap={'wrap'} gap={1} padding={2}  justifyContent={'center'} mb={10}>
    {Wallets.map((wallet) => (
        <Box  padding={'8px'} border={'0px solid #ddd'} width={'5.7rem'} height={''}  >
            <Box overflow={'hidden'} background={"white"} display={'flex'} alignItems={'center'} justifyContent={'center'} width={'5.7rem'}>
                <Image src={wallet.logo} width={'4rem'}  height={'auto'}/>
            </Box>
            <Box>
                <Text isTruncated maxWidth="80px" fontSize={'13px'} mt={'3px'} color={'gray.600'} textAlign={'center'} > {wallet.name}</Text>
            </Box>
        </Box>
    ))}
</Box>
            <PayButton  name={'Proceed'}/>
        </Box>
    </App>
  )
}

export default Wallet