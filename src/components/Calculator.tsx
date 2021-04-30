import React, { useState, useContext } from 'react';
import SideNav from './sidenav/Sidenav';
import CalculatorContext from '../context/CalculatorContext';
import styled, { css } from 'styled-components';

import './index.css';
import { device } from '../utils/devices';
import Main from './main';
interface SideNavContainerType {
  bgColor: string;
  show: boolean;
}

export default function Calculator() {
  const [showNav, setShowNav] = useState(false);
  const { theme } = useContext(CalculatorContext);
  const onClose = () => setShowNav(false);
  const onOpen = () => setShowNav(false);
  return (
    <Container>
      <SideNavContainer bgColor={theme.sidenav} show={showNav}>
        <SideNav toggle={onClose} />
      </SideNavContainer>
      <Main toggle={onOpen} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-columns: 1fr minmax(3fr, auto);
  padding: 0;
  margin: 0;
  font-family: Calibri, 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
  font-size: 20px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 3fr;
  }
`;

const SideNavContainer = styled.div<SideNavContainerType>`
  background-color: ${(props) => props.bgColor};

  @media (max-width: 767px) {
    width: 0;
    height: 100vh;
    opacity: 1;
    margin-right: 3rem;
    padding: 0;
    position: absolute;
    transition: width 0.34s ease;
    ${(props) =>
      props.show &&
      css`
    display: grid;
    position: absolute;
    width: 15rem;
    z-index: 3;
    opacity: 1;
  .copyright {
    display: flex;
    z-index: 2;
  `};
  }

  @media ${device.tablet} {
    display: grid;
    border: 1px solid #edf0ee;
  }
`;
