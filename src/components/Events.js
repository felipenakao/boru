import React from 'react';
import styled from 'styled-components';

const EventsContainer = styled.div`
  padding: 60px;
  background: #131217;
  display: flex;
  justify-content: center;
  background-image: url('/assets/img/pattern-japanese-01.png');
  background-repeat: repeat;
`;

const Event = styled.div`
  display: flex;
  width: 300px;
  text-align: center;
  margin: 0px 60px;
  box-shadow: 5px 5px 30px #060708;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover{

    cursor: pointer;

    h3 {
      color: #feb14b;
    }

    .submit {
      color: #feb14b;
    }
  }
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
  font-size: 28px;
  font-family: Passion One;
  font-weight: 400;
  margin: 0px 0px 5px 0px;
  color: #e3dfcf;
`;

const EventImg = styled.img`
  width: 100%;
  object-fit: contain;
  margin: 0px 0px;
`;

const EventText = styled.p`
  color: #e3dfcf;
  font-family: Roboto;
`;

const EventSubmit = styled.div`
  color: #e3dfcf;
  font-size: 20px;
  font-family: Passion One;
  font-weight: 400;
  text-align: center;
  margin-top: 30px;

  &:hover{
    color: #feb14b;
    cursor: pointer;
  }
`;

const Events = ({ toggleBoruKids, toggleDelivery, toggleSocial }) => (
  <EventsContainer>
    <Event onClick={() => toggleSocial()}>
      <EventTitle>
        <EventTitleText>EVENTOS SOCIAIS E CORPORATIVOS</EventTitleText>
        <EventTitleBorder />
      </EventTitle>
      <EventImg src="/assets/img/event-01.png" />
      <EventText>
        Desde uma simples comemoração, um jantar entre amigos até os mais elaborados  eventos ( aniversários / casamentos / camarotes / 15 anos). 
      </EventText>
      <EventSubmit className="submit">Saiba Mais...</EventSubmit>
    </Event>

    <Event onClick={() => toggleBoruKids()}>
      <EventTitle>
        <EventTitleText>BORU SUSHI KIDS</EventTitleText>
        <EventTitleBorder />
      </EventTitle>
      <EventImg src="/assets/img/event-02.png" />
      <EventText>
        A oportunidade de participar de uma aulinha japonesa no contexto da criança, ministrada pelo chefe do sushi da casa, com conteúdo pensado para idade.   
      </EventText>
      <EventSubmit className="submit">Saiba Mais...</EventSubmit>
    </Event>

    <Event onClick={() => toggleDelivery()}>
      <EventTitle>
        <EventTitleText>DELIVERY</EventTitleText>
        <EventTitleBorder />
      </EventTitle>
      <EventImg src="/assets/img/event-03.png" />
      <EventText>
        Entregamos nossos deliciosos pratos com eficiência e rapidez em sua casa. Os pedidos podem ser realizados diretamente do restaurante ou pelos aplicativos Rappi e Ifood.
      </EventText>
      <EventSubmit className="submit">Saiba Mais...</EventSubmit>
    </Event>

  </EventsContainer>
);

export default Events;