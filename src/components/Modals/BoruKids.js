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
  width: 24%;
  height: 24%;
  object-fit: contain;
`;


const BoruKids = ({ open, close }) => (
    <Modal
      styles={{
        modal:{ backgroundColor: '#e2dfce'}
      }}
      open={open}
      onClose={close}
      center
    >
    <ModalTitle>Boru Sushi Kids</ModalTitle>
    <ModalParagraph>
      Sucesso entre a criançada, um formato de festa pensado especialmente para aquelas crianças fãs da culinária japonesa.
    </ModalParagraph>
    <ModalGallery>
      <ModalImage src="/assets/img/borukids/borukids-01.jpg" />
      <ModalImage src="/assets/img/borukids/borukids-02.jpg" />
      <ModalImage src="/assets/img/borukids/borukids-03.jpg" />
      <ModalImage src="/assets/img/borukids/borukids-04.jpg" />
    </ModalGallery>
    <ModalParagraph>
      A oportunidade de participar de uma aulinha japonesa no contesto da criança, ministrada pelo chefe do sushi da casa, com conteúdo pensado para idade.   
    </ModalParagraph>
    <ModalParagraph>
      Vivência que garante a diversão do aniversariante e seus convidados. Uma experiência sensacional!
    </ModalParagraph>

  </Modal>
)

export default BoruKids;