import React from 'react';
import Modal from "react-responsive-modal";
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

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

const Img = styled.img`
    height: 300px;
    width: 100%!important;
`;


const BoruKids = ({ open, close }) => (
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
    <Carousel
      wrapAround
      width="100%"
      autoplay
      slidesToShow={1.5}
      cellSpacing={30}
      // renderTopCenterControls={({ currentSlide }) => (
      //   <div>Slide: {currentSlide}</div>
      // )}
      renderBottomCenterControls={() => (
        <div></div>
      )}
      renderCenterLeftControls={({ previousSlide }) => (
        <FaArrowAltCircleLeft
          style={{ padding: 10, cursor: 'pointer' }}
          size="30px"
          color="white"
          onClick={previousSlide}
        />
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <FaArrowAltCircleRight
          style={{ padding: 10, cursor: 'pointer' }}
          size="30px"
          color="white"
          onClick={nextSlide}
        />
      )}
    >
      <Img src="/assets/img/borukids/gallery/boru-kids-web-01.jpg" />
      <Img src="/assets/img/borukids/gallery/boru-kids-web-02.jpg" />
      <Img src="/assets/img/borukids/gallery/boru-kids-web-03.jpg" />
      <Img src="/assets/img/borukids/gallery/boru-kids-web-04.jpg" />
      <Img src="/assets/img/borukids/gallery/boru-kids-web-05.jpg" />
      <Img src="/assets/img/borukids/gallery/boru-kids-web-06.jpg" />
      <Img src="/assets/img/borukids/gallery/boru-kids-web-07.jpg" />
      <Img src="/assets/img/borukids/gallery/boru-kids-web-08.jpg" />
      <Img src="/assets/img/borukids/gallery/boru-kids-web-09.jpg" />
      <Img src="/assets/img/borukids/gallery/boru-kids-web-10.jpg" />
    </Carousel>
  </Modal>
)

export default BoruKids;