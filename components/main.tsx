import { Box, Heading, Text } from '@chakra-ui/react';
import { appIcons as AppIcon } from './appIcon';
import { Phone } from './phone';

export const Main = () => {
  return (
      <Box
        padding={10}
        paddingTop={40}
        background='black'
        display='flex'
        alignItems='flex-start'
        flexDirection='row'
        maxW='100vw'
        flexWrap='wrap'
        overflowX='hidden'
        justifyContent='center'>
        <Phone />
        <Box>
          <Heading
            className='gradient-text'
            maxWidth='800px'
            fontSize={'60px'}>
              A simple digital wallet to send, recieve and store digital assets.
          </Heading>
          <AppIcon />
          <Text
              marginTop={'30px'}
              marginBottom={'30px'}
              maxWidth={"700px"}
              fontWeight='bold'>
                Keep your crypto in a secure and accessible wallet. We want to make it easier for users to connect to web3, make it easier for users to off-ramp from crypto, and have the best non-custodial app in Africa!
          </Text>
        </Box> 
        <Box>
        </Box>
      </Box>
  )
};