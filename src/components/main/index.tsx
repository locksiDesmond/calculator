import React from 'react';
import styled from 'styled-components';

import Inputs from '../input/Inputs';
import Outputs from '../output/Outputs';

const Main = ({ toggle }: { toggle: () => void }) => {
  return (
    <CalculatorWrapper data-testid="main-calculator">
      <Outputs toggle={toggle} />
      <Inputs />
    </CalculatorWrapper>
  );
};

export default Main;

const CalculatorWrapper = styled.div`
  display: grid;
  padding: 0;
  grid-template-rows: 160px auto;
  background-color: '#e5e5e5';
  color: '#000';
`;
