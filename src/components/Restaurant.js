import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const Container = styled.div`
  padding: 60px;
  display: flex;
  background: #131217;
  background-image: url('/assets/img/pattern-japanese-01.png');
  background-repeat: repeat;
`;

const Left = styled.div`
  flex: 2;
`;

const Right = styled.div`
  flex: 2;
  text-align: center;
`;

const Paragraph = styled.p`
  color: #e2dfce;
  line-height: 24px;
  font-family: Roboto;
`;

const Restaurant = () => (
  <Container id="restaurant">
    <Left>
      <Title icon="/assets/img/logo.png" title="O Restaurante" />
      <Paragraph>
        O Boru tem como proposta proporcionar uma experiência agradável, garantindo a qualidade no alimentos  da culinária japonesa, num ambiente familiar aconchegante e atendimento diferenciado.
      </Paragraph>
      <Paragraph>
        Prioriza o cuidado e atenção nos produtos fornecidos por seus fornecedores juntamente com sua equipe engajada no mesmo propósito.
      </Paragraph>
      <Paragraph>
        Ambiente amplo, com três espaços diversificados, uma área kids sem igual onde convida as famílias degustar o melhor da tradicional culinária japonesa e garante a diversão dos pequenos, outra área lounge com vista avarandada de vidro perfeito e ideal para eventos.
      </Paragraph>
    </Left>
    <Right>
      <img width="600" src="/assets/img/restaurant-featured.jpg" />
    </Right>
  </Container>
);

export default Restaurant;