import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Typed from 'react-typed';
import video from '../../assets/background.mp4';
import '../Logo/logo.css';
const Header = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {/* <div className="overlay"></div> */}
      <video
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.5,
        }}
        src={video}
        autoPlay
        loop
        muted
      />
      <div className="content">
        <Text as="h1">
          Hi, my name is Hernan
          <Typed
            strings={['Full Stack Web ', 'Node.js', 'MERN', 'React.js']}
            typeSpeed={150}
            backSpeed={50}
            loop
          />
        </Text>
      </div>
    </div>
  );
};

export default Header;
