import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import MenuContent from './MenuContent';
import { menus } from '../constants/menu';

const MenuContainer = styled.div`
`;

const MenuHeader = styled.div`
  background-image: url('/assets/img/menu-header.jpg');
  background-size: cover;
  height: 1080px;
  width: 100%;
`;

const MenuTitleContent = styled.div`
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
  margin: 10px 20px;
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
  margin: 60px 0px 15px;
`;

const renderMenus = () => menus.map(menu => <MenuContent title={menu.name.toUpperCase()} slug={menu.slug} image={menu.image} reverse={menu.reverse} values={menu.menu} />)

const renderMenuNav = (scrollToDiv) => menus.map(menu => <MenuItem onClick={() => scrollToDiv(`#${menu.slug}`)}>{menu.name.toUpperCase()}</MenuItem>)

const Menu = ({ scrollToDiv }) => (
  <MenuContainer id="menu">
    <MenuHeader>
      <MenuTitleContent>
        <Title margin="auto" icon="/assets/img/menu-icon.png" title="Cardápio" />
        <MenuHeaderText>Navegue por uma das opções de cardápio abaixo:</MenuHeaderText>
        <MenuList>
          {renderMenuNav(scrollToDiv)}
        </MenuList>
        <Arrow onClick={() => scrollToDiv(`#entradas-quentes`)} src="/assets/img/menu-arrow.png" />
      </MenuTitleContent>
    </MenuHeader>
    {renderMenus()}
  </MenuContainer>
);

export default Menu;