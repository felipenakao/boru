import React from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const GalleryContent = styled.div`
  padding: 30px;
  background: #323232;
  display: flex;
  justify-content: space-between;
  background-repeat: repeat;
  box-shadow: 0px 0px 30px black;
  border: solid black 3px;
`;

const GalleryImg = styled.img`
  width: 300px;
  height: 220px;
  object-fit: cover;
`;

const Gallery = () => (
  <GalleryContent>
    <Carousel
      wrapAround
      width="100%"
      autoplay
      slidesToShow={3}
      framePadding="0px 15px"
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
      <GalleryImg src="/assets/img/gallery-03.jpg" />
      <GalleryImg src="/assets/img/gallery-01.jpg" />
      <GalleryImg src="/assets/img/gallery-02.jpg" />
      <GalleryImg src="/assets/img/gallery-04.jpg" />
      <GalleryImg src="/assets/img/gallery-05.jpg" />
      <GalleryImg src="/assets/img/gallery-06.jpg" />
      <GalleryImg src="/assets/img/gallery-07.jpg" />
      <GalleryImg src="/assets/img/gallery-08.jpg" />
      <GalleryImg src="/assets/img/gallery-09.jpg" />
      <GalleryImg src="/assets/img/gallery-10.jpg" />
    </Carousel>
  </GalleryContent>
);

export default Gallery;