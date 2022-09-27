import React from "react";
import {
  ChakraProvider,
  Flex,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Box,
  keyframes,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import "../Logo/logo.css";
import { motion, isValidMotionProp, AnimatePresence } from "framer-motion";

const animationKeyframes = keyframes`
    0% { transform: scale(0.5) rotate(0); }
    20% { transform: scale(1) rotate(0);  }
    40% { transform: scale(1.2) rotate(270deg); }
    60% { transform: scale(1.4) rotate(270deg);  }
    80% { transform: scale(2) rotate(0);  }
    100% { transform: scale(0) rotate(0);  }
  `;
const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const animation = `${animationKeyframes} 6s ease-in-out`;
const Loader = () => {
  const hl = "HL";
  return (
    <Flex h="100vh" bg="gray.100" justifyContent="center" alignItems="center">
      <Box
        as={motion.div}
        animation={animation}
        initial={{ y: "50%", opacity: 0, scale: 2.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: "70%", opacity: 0 }}
      >
        <Box className="rainbow" h="10px" w="10px">
          <ChakraBox
            as={motion.h2}
            animate={{
              scale: [1, 1.05, 1.1, 1.15, 1.3],
              rotate: [-45, -45, -235, -45, -45],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
            }}
            color="white"
            fontSize="15px"
            fontWeight="extrabold"
            fontFamily="'Oswald', sans-serif;"
          >
            {hl}
          </ChakraBox>
        </Box>
      </Box>
    </Flex>
  );
};

export default Loader;
