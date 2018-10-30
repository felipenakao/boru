import React from 'react';
import styled from 'styled-components';

const MenuContentContainer = styled.div`
    background-color: #121317;
    border-bottom: 2px solid black;
    background-image: url('/assets/img/pattern-japanese-01.png');
    background-repeat: repeat;
    box-shadow: 0px 5px 30px #060708;
`;

const MenuTitle = styled.div`
    font-size: 24px;
    display: flex;
    padding: 30px;
    justify-content: center;
`;

const MenuTitleText = styled.h3`
  font-family: Passion One;
  font-weight: 400;
  color: #feb14b;
  border-bottom: 5px solid #e2dfce;
  padding-bottom: 15px;
`;

const MenuSection = styled.div`
    display: flex;
    padding: 60px;
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'}
`;

const MenuList = styled.div`
    flex: 2;
    padding: 0px 0px;
`;

const MenuImgContainer = styled.div`
    flex: 2;
    text-align: center;
`;

const MenuImg = styled.img`
    width: 500px;
    height: 300px;
`;

const MenuItem = styled.div`
  color: #e3dfcf;
  margin: 30px;
`;

const MenuItemTitle = styled.h5`
  font-family: Passion One;
  font-weight: 400;
  font-size: 18px;
  margin: 0px;
`;

const MenuItemDescription = styled.div`
  font-size: 14px;
  font-family: Roboto;

`;

const renderMenu = (values) => {
  return values.map((list, i) => (
    <MenuList key={i}>
      {list.map((item, i) => (
        <MenuItem key={i}>
          <MenuItemTitle>{item.title}</MenuItemTitle>
          <MenuItemDescription>{item.description}</MenuItemDescription>
      </MenuItem>
      ))}
    </MenuList>
  ));
}

const MenuContent = ({ title, values, reverse,  }) => (
  <MenuContentContainer>
    <MenuTitle>
      <MenuTitleText>
        {title}
      </MenuTitleText>
    </MenuTitle>
    <MenuSection reverse={reverse}>
      {renderMenu(values)}
      <MenuImgContainer>
        <MenuImg src="assets/img/restaurant-featured.jpg" />
      </MenuImgContainer>
    </MenuSection>
  </MenuContentContainer>
);

export default MenuContent;