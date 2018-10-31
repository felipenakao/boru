import React from 'react';
import styled from 'styled-components';

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
  height: 180px;
  object-fit: cover;
`;

const Gallery = () => (
  <GalleryContent>
    <GalleryImg src="/assets/img/gallery-03.jpg" />
    <GalleryImg src="/assets/img/gallery-01.jpg" />
    <GalleryImg src="/assets/img/gallery-02.jpg" />
    <GalleryImg src="/assets/img/gallery-04.jpg" />
  </GalleryContent>
);

export default Gallery;