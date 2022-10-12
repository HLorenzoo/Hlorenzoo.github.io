import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import useAppContext from "../../context/context";
import Logo from "../Logo/Logo";

const Card = ({ description, image, tecnologias, proyecto }) => {
  const { language, setlanguage } = useAppContext();
  return (
    <Box
      as={motion.div}
      transition="opacity 0.7s cubic-bezier(0.5, 0, 0, 1) 0.25s"
      initial={{ opacity: 0.1 }}
      whileInView={{ opacity: 1 }}
    >
      <a class="card">
        <Image className="card__image" src={image} />

        <div class="card__overlay">
          <div class="card__header">
            <div class="card__thumb">
              <Logo />
            </div>

            <div class="card__header-text">
              <h3 class="card__title">{proyecto}</h3>
              <span class="card__status">
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
          <p class="card__description">{description}</p>
        </div>
      </a>
    </Box>
  );
};

export default Card;
