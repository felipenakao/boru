import React from 'react';
import styled from 'styled-components';

const GalleryContent = styled.div`
  padding: 30px;
  background: #fdb14d;
  display: flex;
  justify-content: space-between;
`;

const GalleryImg = styled.img`
  width: 300px;
  height: 180px;
  object-fit: cover;
`;

const Gallery = () => (
  <GalleryContent>
    <GalleryImg src="/assets/img/restaurant-featured.jpg" />
    <GalleryImg src="/assets/img/restaurant-featured.jpg" />
    <GalleryImg src="/assets/img/restaurant-featured.jpg" />
    <GalleryImg src="/assets/img/restaurant-featured.jpg" />
  </GalleryContent>
);

export default Gallery;