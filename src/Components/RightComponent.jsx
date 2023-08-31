import { Box, Card, CardBody, Image, Text } from '@chakra-ui/react';
import { faBuildingColumns, faForward, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


export const RightComponent = () => {
  return (
    <Box display={'flex'} flexDir={'column'} flex={'1'} >
      <Box height={'20rem'} background={`linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.5)),url('https://img.freepik.com/free-vector/rupee-symbol-frame-with-text-space_1017-36519.jpg?w=826&t=st=1693458059~exp=1693458659~hmac=1243722757ead3472af8089fa205d70eb4d6405a9b490b9f8ed9282c460dc08b');`} backgroundSize={'cover'} backgroundRepeat={'no-repeat'} display={'flex'}  alignItems={'center'} borderRadius={'10px 10px 0 0'} >
        
        <Text color={'white'} fontWeight={'semibold'} fontSize={'24px'} justify={'center'}ml={'20%'}  >Subscribe and start saving your money today</Text>

      </Box>
    <Box background={'#D8D8D8'} padding={3} borderRadius={'0 0 8px 8px'} mt={2}>

    <Card display={'flex'} flexDir={'row'}  p={2} mt={8} alignItems={'center'} >
      
    <FontAwesomeIcon icon={faForward} />
    <Text ml={"10%"} fontWeight={"semibold"} color={'gray.500'} >UPI</Text>
  
</Card>
<Card display={'flex'}  flexDir={'row'}  p={2} mt={4} alignItems={'center'}>
<FontAwesomeIcon icon={faWallet} />
    <Text ml={"10%"} fontWeight={"semibold"} color={'gray.500'}>Wallet</Text>
  
</Card>
<Card display={'flex'} flexDir={'row'}  p={2} mt={4} alignItems={'center'}>
    <FontAwesomeIcon icon={faBuildingColumns} />  
    <Text ml={"10%"}fontWeight={"semibold"} color={'gray.500'} >Net Banking</Text>
</Card>

    </Box>
    </Box>
  );
};






// <Box
//       minW={'40%'}
//       alignItems={'flex-start'}
//       display={'flex'}
//       flexDir={'column'}
//       position="relative"
//       overflow={'hidden'}
//     >
//       <Box
//         width={'100%'}
//         h={'250px'}
//         overflow={'hidden'}
//         borderRadius={'8px 8px 0 0'}
//         >
//         <Image
//         position="relative"
//           src=""
//           alt="Payment"
//           boxSize={'full'}
//           objectFit={'cover'}
//         />
//         <Box
//           width={'50%'} 
//           bg={'yellow'}
//           h={'70px'}
//           mt={'-35px'}
//           position="absolute"
//           top="93%"
//           left="50%"
//           transform="translate(-50%, -50%)"
//           zIndex={1}
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//         >
//           <Text fontSize="lg">Hello</Text>
//         </Box>
//       </Box>
//       <Box
//         mt="0px"
//         bg={'green'}
//         w={'100%'}
//         wordBreak={'break-word'}
//         borderRadius="0 0 8px 8px"
//         p="10px"
//         color="white"
//         display="flex"
//         justifyContent="space-between" 
//         alignItems="center"
        
//       >
//         <Box>
//           There are payments upcoming. {/* You can replace this with actual content */}
//         </Box>
        
//       </Box>
//     </Box>