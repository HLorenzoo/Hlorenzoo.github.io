import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  Box,
  Flex,
  Image,
  Text,
  Divider,
} from "@chakra-ui/react";
import Languages from "../Languages";
import useAppContext from "../../../../context/context";
const LanguageDrawer = () => {
  const { language, setlanguage } = useAppContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Button 
        onClick={onOpen}
        variant="ghost"
        display={{ base: "block", lg: "none" }}
      >
        <Box mb="25px" ml="5px">
          <Languages />
        </Box>
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bgColor="#222531">
            <AlertDialogHeader
              fontSize="lg"
              className="sf"
              fontWeight="bold"
              color="white"
            >
              Idioma | Language
            </AlertDialogHeader>

            <AlertDialogBody>
              <Box onClick={() => setlanguage("es")} pb={2}>
                <Flex alignItems="center" onClick={onClose}>
                  <Image w="10%" src="https://freesvg.org/img/1529053930.png" />

                  <Text
                    className="sf"
                    color="#1D6E9C"
                    as={"h1"}
                    fontSize="25px"
                    pl={4}
                  >
                    |ES
                  </Text>
                </Flex>
              </Box>
              <Divider color="#1D6E9C" />
              <Box onClick={() => setlanguage("en")} pt={2} pb={2}>
                <Flex alignItems="center" onClick={onClose}>
                  <Image
                    borderRadius="200px"
                    w="10%"
                    src="https://i.ibb.co/KxmbQTh/image.png"
                  />

                  <Text
                    className="sf"
                    color="#1D6E9C"
                    as={"h1"}
                    fontSize="25px"
                    pl={4}
                  >
                    |EN
                  </Text>
                </Flex>
              </Box>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default LanguageDrawer;
