import React from 'react';
import styled from 'styled-components';

const EventsContainer = styled.div`
  padding: 60px;
  background: #131217;
  display: flex;
  justify-content: center;
`;

const Event = styled.div`
  width: 300px;
  text-align: center;
  margin: 0px 60px;
`;

const EventTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const EventTitleBorder = styled.div`
  width: 70%;
  height: 5px;
  background: #e3dfcf;
  margin: auto;
`;

const EventTitleText = styled.h3`
  font-size: 20px;
  margin: 0px 0px 5px 0px;
  color: #e3dfcf;
`;

const EventImg = styled.img`
  width: 100%;
`;

const EventText = styled.p`
  color: #e3dfcf;
`;

const EventSubmit = styled.div`
  color: #e3dfcf;
  font-size: 20px;
  text-align: center;

  &:hover{
    color: #febe00;
    cursor: pointer;
  }
`;

const Events = () => (
  <EventsContainer>
    <Event>
      <EventTitle>
        <EventTitleText>JAPA NA SUA CASA</EventTitleText>
        <EventTitleBorder />
      </EventTitle>
      <EventImg src="/assets/img/restaurant-featured.jpg" />
      <EventText>
        Oferecemos tudo de melhor da culinária japonesa para seu evento, personalizamos o serviço e cardápio ao gosto do cliente de acordo com perfil do seu evento.
      </EventText>
      <EventSubmit>Saiba Mais...</EventSubmit>
    </Event>

    <Event>
      <EventTitle>
        <EventTitleText>FESTAS CORPORATIVAS E SOCIAIS</EventTitleText>
        <EventTitleBorder />
      </EventTitle>
      <EventImg src="/assets/img/restaurant-featured.jpg" />
      <EventText>
        Desde uma simples comemoração, um jantar entre amigos até os mais elaborados  eventos ( aniversários / casamentos / camarotes / 15 anos). 
      </EventText>
      <EventSubmit>Saiba Mais...</EventSubmit>
    </Event>

    <Event>
      <EventTitle>
        <EventTitleText>BORU SUSHI KIDS</EventTitleText>
        <EventTitleBorder />
      </EventTitle>
      <EventImg src="/assets/img/restaurant-featured.jpg" />
      <EventText>
        A oportunidade de participar de uma aulinha japonesa no contexto da criança, ministrada pelo chefe do sushi da casa, com conteúdo pensado para idade.   
      </EventText>
      <EventSubmit>Saiba Mais...</EventSubmit>
    </Event>
  </EventsContainer>
);

export default Events;