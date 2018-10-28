import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import styled from 'styled-components';

import Header from './components/Header';
import Restaurant from './components/Restaurant';

const Container = styled.div`
  width: 1366px;
  height: auto;
  margin: 0px auto;
`;

class App extends Component {
  render() {
    return (
      <div style={{ background: '#222' }}>
        <Container>
          <Header />
          <Restaurant />
        </Container>
      </div>
    );
  }
}

export default App;
