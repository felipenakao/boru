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


const Delivery = ({ open, close }) => (
    <Modal
      styles={{
        modal:{ backgroundColor: 'white'}
      }}
      open={open}
      onClose={close}
      center
    >
    <ModalTitle>Boru Sushi Kids</ModalTitle>
    <ModalParagraph>
        Entregamos nossos deliciosos pratos com eficiência e rapidez em sua casa. Os pedidos podem ser realizados diretamente do restaurante ou pelos aplicativos Rappi e Ifood.
    </ModalParagraph>
    <ModalGallery>
      <ModalImage src="/assets/img/delivery/delivery-01.jpg" />
      <ModalImage src="/assets/img/delivery/delivery-02.jpg" />
      <ModalImage src="/assets/img/delivery/delivery-03.jpg" />
    </ModalGallery>
    <ModalParagraph>
      Peça já o seu pedido! Pelos aplicativos ou pelos telefones (11) 3758-1049 / (11) 3758-0547.
    </ModalParagraph>

  </Modal>
)

export default Delivery;