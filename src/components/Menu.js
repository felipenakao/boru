import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import MenuContent from './MenuContent';
import { entrada } from '../constants/menu';

const MenuContainer = styled.div`
`;

const MenuHeader = styled.div`
  background-image: url('/assets/img/menu-header.jpg');
  background-size: cover;
  height: 768px;
  width: 100%;
`;

const MenuTitleContent = styled.div`
  width: 600px;
  height: auto;
  margin: auto;
  text-align: center;
  padding: 60px;
`;

const Arrow = styled.img`
  width: 50px;
  height: 50px;
  margin: 60px;

  &:hover{
    opacity: 0.8;
    cursor: pointer;
  }
`;

const Menu = () => (
  <MenuContainer>
    <MenuHeader>
      <MenuTitleContent>
        <Title margin="auto" />
        <Arrow src="/assets/img/menu-arrow.png" />
      </MenuTitleContent>
    </MenuHeader>
    <MenuContent title="ENTRADAS" image="/assets/img/restaurant-featured.jpg" values={entrada} />
    <MenuContent title="ENTRADAS" image="/assets/img/restaurant-featured.jpg" values={entrada} reverse />
    <MenuContent title="ENTRADAS" image="/assets/img/restaurant-featured.jpg" values={entrada} />
  </MenuContainer>
);

export default Menu;