import React, { Component } from 'react';

// import logo from './logo.svg';
// import './App.css';
import styled from 'styled-components';
import scrollToElement from 'scroll-to-element';

import Header from './components/Header';
import Restaurant from './components/Restaurant';
import Gallery from './Gallery';
import Events from './components/Events';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BoruKids from './components/BoruKids';

const Container = styled.div`
  width: 1366px;
  height: auto;
  margin: 0px auto;
`;

class App extends Component {

  state = {
    openBoruKids: false,
  }

 scrollToDiv = (elem) => {
  scrollToElement(elem, {
    offset: 0,
    ease: 'inOutCirc',
    duration: 1000
});
 }

 toggleBoruKids = () => this.setState({ openBoruKids: !this.state.openBoruKids });

  render() {
    return (
      <div style={{ background: '#222' }}>
        <Container>
          <Header scrollToDiv={this.scrollToDiv} />
          <Restaurant />
          <Gallery />
          <Events toggleBoruKids={this.toggleBoruKids} />
          <Menu scrollToDiv={this.scrollToDiv} />
          <Contact margin="auto" />
          <Footer scrollToDiv={this.scrollToDiv} />
        </Container>

        <BoruKids open={this.state.openBoruKids} close={this.toggleBoruKids} />
      </div>
    );
  }
}

export default App;
