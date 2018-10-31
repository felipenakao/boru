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
  height: 1080px;
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
  margin: 30px 60px;

  &:hover{
    opacity: 0.8;
    cursor: pointer;
  }
`;

const MenuList = styled.ul`
  display: flex;
  padding: 0px;
  align-self: flex-start;
  justify-content: center;
`;

const MenuItem = styled.li`
  color: #e2dfce;
  margin: 10px;
  list-style: none;
  font-family: Passion One;
  font-weight: 400;
  font-size: 24px;

  &:hover{
    color: #feb14b;
    cursor: pointer;
  }
`;

const MenuHeaderText = styled.div`
  font-family: Roboto;
  color: #e2dfce;
  text-align: center;
  margin: 30px 0px 0px;
`;



const Menu = ({ scrollToDiv }) => (
  <MenuContainer id="menu">
    <MenuHeader>
      <MenuTitleContent>
        <Title margin="auto" icon="/assets/img/menu-icon.png" title="Cardápio" />
        <MenuHeaderText>Navegue por uma das opções de cardápio abaixo:</MenuHeaderText>
        <MenuList>
          <MenuItem onClick={() => {}}>Cardápio 1</MenuItem>
          <MenuItem onClick={() => {}}>Cardápio 2</MenuItem>
          <MenuItem onClick={() => {}}>Cardápio 3</MenuItem>
          <MenuItem onClick={() => {}}>Cardápio 4</MenuItem>
          <MenuItem onClick={() => {}}>Cardápio 5</MenuItem>
        </MenuList>
        <Arrow src="/assets/img/menu-arrow.png" />
      </MenuTitleContent>
    </MenuHeader>
    <MenuContent title="ENTRADAS" image="/assets/img/restaurant-featured.jpg" values={entrada} />
    <MenuContent title="ENTRADAS" image="/assets/img/restaurant-featured.jpg" values={entrada} reverse />
    <MenuContent title="ENTRADAS" image="/assets/img/restaurant-featured.jpg" values={entrada} />
  </MenuContainer>
);

export default Menu;