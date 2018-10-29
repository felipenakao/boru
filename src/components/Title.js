import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid #e2dfce;
  padding: 10px;
  width: fit-content;
  display: flex;
  justify-self: flex-start;
  align-self: flex-start;
  align-items: center;
  border-radius: 10px;
  margin: ${props => props.margin}
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Text = styled.h2`
  color: #e2dfce;
  font-size: 24px;
  margin: 0px;
  font-family: Passion One;
  font-weight: 400;
`;

const Title = ({ margin }) => (
    <Container margin={margin}>
      <Logo src="/assets/img/logo.png" />
      <Text>O Restaurante</Text>
    </Container>
)

export default Title;