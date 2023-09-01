import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Card, Image, Stack, Text } from '@chakra-ui/react';
import { faAngleDown, faBank, faBars, faBuildingColumns, faCreditCard, faForward, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const RightComponent = () => {

  const [selectOption, setSelectOption] = useState('');
  const [showIcon, setShowIcon] = useState(true);
  const [openClose , setOpenClose] = useState(false)
  const [topCard , setTopCard] = useState('');

//   const [thiscard,setThiscard] = useState('')

  useEffect(() => {
    // Function to handle window resize event
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
        setOpenClose(true)
      }
    };

    
    window.addEventListener('resize', handleResize);

    
    handleResize();

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  




  const location = useLocation();

  useEffect(() => {
    setSelectOption(location.pathname);
    
  }, [location]);
 

  const handleOptionClick = (option) => {
      setSelectOption(option);
      
    };


    const handleTopcard=(details)=>{
        console.log("twst",details);
        setTopCard({name:"upi",logo:faAngleDown})
     }
    // useEffect(()=>{
    // //    handleTopcard(topCard)
       
    //     console.log(topCard);
    // },[topCard])


  return (
    <Box display={'flex'} flexDir={'column'} flex={'1'}>
      <Box
        height={'20rem'}
        background={`linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.5)),url('https://img.freepik.com/free-vector/rupee-symbol-frame-with-text-space_1017-36519.jpg?w=826&t=st=1693458059~exp=1693458659~hmac=1243722757ead3472af8089fa205d70eb4d6405a9b490b9f8ed9282c460dc08b');`}
        backgroundSize={'cover'}
        backgroundRepeat={'no-repeat'}
        display={'flex'}
        alignItems={'center'}
        borderRadius={'10px 10px 0 0'}
        position={'relative'}
        boxShadow={'xl'}
      >
        <Text color={'white'} fontWeight={'semibold'} fontSize={'24px'} justify={'center'} ml={'20%'}>
          Subscribe and start saving your money today
        </Text>
        <Box bg={'white'} minW={'auto'} position={'absolute'} bottom={0} left={'50px'} height={'60px'} mb={'-7%'} right={'50px'} padding={'8px'} overflow={'hidden'} borderRadius={'8px'} display={'flex'}>
          <Image
            borderRadius={'5px'}
            boxSize={'60px'}
            h={'full'}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Ow_suJaOFL-zAfZlsfqjBuM8ga62dohrrQ&usqp=CAU'
          />
          <Stack>
            <Text ml={4} color={'gray.500'}>
              Professional Plan
            </Text>
            <Text fontWeight={'bold'} ml={4} mt={-2}>
              $36 / month
            </Text>
          </Stack>
        </Box>
      </Box>
      <Box background={'#D8D8D8'} padding={3} borderRadius={'0 0 8px 8px'} mt={2}>
        <Box>
          <Box>
            <>
              <Card
                display={'flex'}
                justify={'space-between'}
                
                flexDir={'row'}
                p={2}
                mt={8}
                alignItems={'center'}
                position={'relative'}
                
                
                // style={{
                //   border: selectOption === '/card' ? '1px solid blue' : 'none',
                // }}
              >
                <Box width={'300px'} display={'flex'} alignItems={'center'}>
                <FontAwesomeIcon icon={topCard?.logo ?? faCreditCard} />
                <Text ml={'10%'} fontWeight={'semibold'} color={'gray.500'}>
                  {topCard ?? "Cardtest"}
                </Text>
                </Box>
               <Box display={'flex'} alignItems={'center'}>
               {showIcon && (
             <FontAwesomeIcon
               onClick={()=>setOpenClose(!openClose)}
               
               fontSize={'20px'}
               style={{}}
               icon={faBars}
             />
              )}
               </Box>
              </Card>
            </>
          </Box>
        </Box>

        <Box display={openClose ? 'block' : 'none'}>
        <Box>
            <Link to={'/card'}>
              <Card
                display={'flex'}
                justify={'space-between'}
                
                flexDir={'row'}
                p={2}
                mt={8}
                alignItems={'center'}
                position={'relative'}
                onClick={() => {handleOptionClick('/card') 
                handleTopcard({name:'Card',logo:faCreditCard})}}
                style={{
                  border: selectOption === '/card' ? '1px solid blue' : 'none',
                }}
              >
                <Box width={'300px'} display={'flex'} alignItems={'center'}>
                <FontAwesomeIcon icon={faCreditCard} />
                <Text ml={'10%'} fontWeight={'semibold'} color={'gray.500'}>
                  Card
                </Text>
                </Box>
               <Box display={'flex'} alignItems={'center'}>
              
               </Box>
              </Card>
            </Link>
          </Box>
        <Link to={'/upi'}>
          <Card
            display={'flex'}
            flexDir={'row'}
            p={2}
            mt={4}
            alignItems={'center'}
            style={{
              border: selectOption === '/upi' ? '1px solid blue' : 'none',
            }}
            onClick={() => {handleOptionClick('/upi'); setTopCard('testtt');}}
          >
            <FontAwesomeIcon icon={faForward} />
            <Text ml={'10%'} fontWeight={'semibold'} color={'gray.500'}>
              UPI
            </Text>
          </Card>
        </Link>

        <Link to={'/wallet'}>
          <Card
            display={'flex'}
            flexDir={'row'}
            p={2}
            mt={4}
            alignItems={'center'}
            onClick={() =>{ handleOptionClick('/wallet')
            handleTopcard({name:'Wallet',logo:faWallet})
        }}
            style={{
              border: selectOption === '/wallet' ? '1px solid blue' : 'none',
            }}
          >
            <FontAwesomeIcon icon={faWallet} />
            <Text ml={'10%'} fontWeight={'semibold'} color={'gray.500'}>
              Wallet
            </Text>
          </Card>
        </Link>

        <Link to={'/bank'}>
          <Card
            display={'flex'}
            flexDir={'row'}
            p={2}
            mt={4}
            alignItems={'center'}
            onClick={() =>{ handleOptionClick('/bank')
            handleTopcard({name:'Bank',logo:faBank})
        }}
            style={{
              border: selectOption === '/bank' ? '1px solid blue' : 'none',
            }}
          >
            <FontAwesomeIcon icon={faBuildingColumns} />
            <Text ml={'10%'} fontWeight={'semibold'} color={'gray.500'}>
              Bank
            </Text>
          </Card>
        </Link> 
        </Box>
      </Box>
    </Box>
  );
};
