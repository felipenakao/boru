import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 768px;
  background-image: url('/assets/img/header-bg.jpg');
  background-size: cover;
`;

const Gradient = styled.div`
  display: flex;
  width: 100%;

  background: rgba(34,34,34,1);
  background: -moz-linear-gradient(top, rgba(34,34,34,1) 0%, rgba(231,56,39,0) 50%);
  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(34,34,34,1)), color-stop(50%, rgba(231,56,39,0)));
  background: -webkit-linear-gradient(top, rgba(34,34,34,1) 0%, rgba(231,56,39,0) 50%);
  background: -o-linear-gradient(top, rgba(34,34,34,1) 0%, rgba(231,56,39,0) 50%);
  background: -ms-linear-gradient(top, rgba(34,34,34,1) 0%, rgba(231,56,39,0) 50%);
  background: linear-gradient(to bottom, rgba(34,34,34,1) 0%, rgba(231,56,39,0) 50%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#222222', endColorstr='#e73827', GradientType=0 );
`;

const Nav = styled.div`
  width: 100%;
  margin: 30px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 480px){
  }
`;

const LogoContainer = styled.div`
  align-self: flex-start;
`;

const Logo = styled.img`
  width: 125px;
`;

const Menu = styled.ul`
  display: flex;
  padding: 0px;
  align-self: flex-start;
`;

const MenuItem = styled.li`
  color: #e2dfce;
  margin: 10px;
  list-style: none;
  font-family: Roboto;
  font-weight: 400;

  &:hover{
    color: #feb14b;
    cursor: pointer;
  }
`;

const Header = ({ scrollToDiv }) => (
  <HeaderContainer>
    <Nav>
      <LogoContainer>
        <Logo src="/assets/img/header-logo.png"></Logo>
      </LogoContainer>
      
      <Menu>
        <MenuItem onClick={() => scrollToDiv('#restaurant')}>O Restaurante</MenuItem>
        <MenuItem onClick={() => scrollToDiv('#menu')}>Cardápio</MenuItem>
        <MenuItem onClick={() => scrollToDiv('#contact')}>Contato & Localização</MenuItem>
        <MenuItem><a href="https://www.facebook.com/borusushi/" target="_blank"><img width="20px" src="/assets/img/facebook.png" /></a></MenuItem>
        <MenuItem><a href="https://www.instagram.com/boru_sushi" target="_blank"><img width="20px" src="/assets/img/instagram.png" /></a></MenuItem>
      </Menu>
    </Nav>
  </HeaderContainer>
);

export default Header;