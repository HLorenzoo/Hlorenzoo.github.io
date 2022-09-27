import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import './logo.css';
const Logo = () => {
  const hl = 'HL';
  return (
    <Box className="rainbow">
      <Text
        color="white"
        fontFamily="monospace"
        fontSize="25px"
        fontWeight="extrabold"
        transform="rotate(-45deg)"
      >
        {hl}
      </Text>
    </Box>
  );
};

export default Logo;
