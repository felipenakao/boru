import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    padding: 0px 0px 60px;
    text-align: center;
    background-image: url('/assets/img/pattern-japanese-01.png');
    color: #e3dfcf;
`;

const Terms = styled.div`
    font-family: Roboto;
    text-align: center;
`;

const Social = styled.div`
    display: flex;
    justify-content: center;
`;

const SocialImg = styled.img`
    width: 20px;
    height: 20px;
    margin: 15px;
`;

const Menu = styled.ul`
  display: flex;
  padding: 0px;
  align-self: flex-start;
  justify-content: center;
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

const Logo = styled.img`
  width: 50px;
  margin-top: 30px;
`;

const Footer = ({ scrollToDiv }) => (
    <FooterContainer>
        <Social>
            <a href="https://www.facebook.com/borusushi/" target="_blank"><SocialImg src="/assets/img/facebook.png" /></a>
            <a href="https://www.instagram.com/boru_sushi" target="_blank"><SocialImg src="/assets/img/instagram.png" /></a>
        </Social>
        <Menu>
            <MenuItem onClick={() => scrollToDiv('#restaurant')}>O Restaurante</MenuItem>
          <MenuItem onClick={() => scrollToDiv('#menu')}>Cardápio</MenuItem>
          <MenuItem onClick={() => scrollToDiv('#contact')}>Contato & Localização</MenuItem>
        </Menu>
        <Terms>Boru Sushi - Desenvolvimento por Glow Produções</Terms>
        <Logo src="/assets/img/logo.png" />
    </FooterContainer>
);

export default Footer;