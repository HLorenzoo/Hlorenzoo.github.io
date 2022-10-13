import { Box, Image, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import useAppContext from "../../context/context";
import Logo from "../Logo/Logo";
import github from "../../assets/icons/github.png";
const Card = ({ description, img, image, tecnologias, proyecto, link }) => {
  const { language, setlanguage } = useAppContext();
  return (
    <Box
      as={motion.div}
      transition="opacity 0.7s cubic-bezier(0.5, 0, 0, 1) 0.25s"
      initial={{ opacity: 0.1 }}
      whileInView={{ opacity: 1 }}
    >
      <a className="card">
        <Image className="card__image" src={image} />

        <div className="card__overlay">
          <div className="card__header">
            {/* <div className="card__thumb">
              <Logo />
            </div> */}

            <div className="card__header-text">
              <h3 className="card__title">{proyecto}</h3>
              <Box
                w="20%"
                alignItems="center"
                filter="grayscale(0.2)"
                cursor="pointer"
                transition="all .5s ease-out"
                _hover={{
                  filter: "grayscale(0)",
                  transform: "scale(1.10)",
                }}
              >
                <Link href={link} isExternal>
                  <Image src={img} w="33px" h="33px" />
                </Link>
              </Box>
              <span className="card__status">
                {language === "es" ? "Desarrollado con :" : "Developed with"}
                <Text
                  color="rgba(24, 176, 255)"
                  className="calibre"
                  fontSize="1rem"
                >
                  {tecnologias}
                </Text>
              </span>
            </div>
          </div>
          <p className="card__description">{description}</p>
        </div>
      </a>
    </Box>
  );
};

export default Card;
