import { Box,Image,Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo/Logo";

const Card = ({ description, image, tecnologias,proyecto }) => {
  return (
    <Box>
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
                Desarrollado con :
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
