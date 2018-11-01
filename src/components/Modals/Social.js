import React from 'react';
import Modal from "react-responsive-modal";
import styled from 'styled-components';

const ModalTitle = styled.h2`
  font-family: Passion One;
  font-weight: 400;
  font-size: 24px;
`;

const ModalParagraph = styled.p`
  font-family: Roboto;
`;

const ModalGallery = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalImage = styled.img`
  width: 30%;
  height: 30%;
  object-fit: contain;
`;


const Social = ({ open, close }) => (
    <Modal
      styles={{
        modal:{ backgroundColor: 'white'}
      }}
      open={open}
      onClose={close}
      center
    >
    <ModalTitle>Eventos Sociais e Corporativos</ModalTitle>
    <ModalParagraph>
      Oferecemos tudo de melhor da culinária japonesa para seu evento, personalizamos o serviço e cardápio ao gosto do cliente de acordo com perfil do seu evento.
    </ModalParagraph>
    <ModalGallery>
      <ModalImage src="/assets/img/social/social-01.jpg" />
      <ModalImage src="/assets/img/social/social-02.jpg" />
      <ModalImage src="/assets/img/social/social-03.jpg" />
    </ModalGallery>
    <ModalParagraph>
      Desde uma simples comemoração, um jantar entre amigos até os mais elaborados  eventos ( aniversários / casamentos / camarotes / 15 anos). 
    </ModalParagraph>

    <ModalTitle>Sushi na sua Casa ( mínimo de 6 pessoas )</ModalTitle>
    <ModalParagraph>
      Temos serviço de sushi na sua casa festas com barcas e temakis a seu gosto. Levamos barcas, realizamos a arrumação do local conforme gosto e tudo o que for necessário para um jantar agradável.
    </ModalParagraph>

  </Modal>
)

export default Social;