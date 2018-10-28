import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import styled from 'styled-components';

import Header from './components/Header';
import Restaurant from './components/Restaurant';
import Gallery from './Gallery';
import Events from './components/Events';
import Menu from './components/Menu';

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
          <Gallery />
          <Events />
          <Menu />
        </Container>
      </div>
    );
  }
}

export default App;
