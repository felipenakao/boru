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
import BoruKids from './components/Modals/BoruKids';
import Social from './components/Modals/Social';
import Delivery from './components/Modals/Delivery';

const Container = styled.div`
  width: 1366px;
  height: auto;
  margin: 0px auto;
`;

class App extends Component {

  state = {
    openBoruKids: false,
    openSocial: false,
    openDelivery: false,
  }

 scrollToDiv = (elem) => {
  scrollToElement(elem, {
    offset: 0,
    ease: 'inOutCirc',
    duration: 1000
});
 }

 toggleBoruKids = () => this.setState({ openBoruKids: !this.state.openBoruKids });
 toggleSocial = () => this.setState({ openSocial: !this.state.openSocial });
 toggleDelivery = () => this.setState({ openDelivery: !this.state.openDelivery });

  render() {
    return (
      <div style={{ background: '#222' }}>
        <Container>
          <Header scrollToDiv={this.scrollToDiv} />
          <Restaurant />
          <Gallery />
          <Events toggleBoruKids={this.toggleBoruKids} toggleSocial={this.toggleSocial} toggleDelivery={this.toggleDelivery} />
          <Menu scrollToDiv={this.scrollToDiv} />
          <Contact margin="auto" />
          <Footer scrollToDiv={this.scrollToDiv} />
        </Container>

        <BoruKids open={this.state.openBoruKids} close={this.toggleBoruKids} />
        <Social open={this.state.openSocial} close={this.toggleSocial} />
        <Delivery open={this.state.openDelivery} close={this.toggleDelivery} />
      </div>
    );
  }
}

export default App;
