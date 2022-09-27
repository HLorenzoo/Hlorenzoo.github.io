import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Typed from 'react-typed';
import './loader.css';
import Logo from '../Logo/Logo';
const Navbar = () => {
  const hl = '<HL/>';
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className="navbar" p={4}>
        <Flex h={16} alignItems={'center'} justifyContent="space-between">
          <Box className="loader" pl="20px">
            <Logo />
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={2}>
              <Button
                height="48px"
                width="100px"
                borderTop="2px"
                borderColor="#19b1ff"
                className=" hvr-underline-from-left"
              >
                Home
              </Button>
              <button class="button type3">About</button>

              <div class="center">
                <button class="btn">
                  <svg
                    width="120px"
                    height="60px"
                    viewBox="0 0 120 60"
                    class="border"
                  >
                    <polyline
                      points="179,1 179,59 1,59 1,1 179,1"
                      class="bg-line"
                    />
                    <polyline
                      points="179,1 179,59 1,59 1,1 179,1"
                      class="hl-line"
                    />
                  </svg>
                  <span>Experience</span>
                </button>
              </div>

              <button class="button type3">Skills</button>
              <button class="button type3">Contact</button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
