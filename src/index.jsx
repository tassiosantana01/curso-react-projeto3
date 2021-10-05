import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import Home from './templates/App';

import styled, { css } from 'styled-components';

const changeBackground = (theme, bg) => css`
  background: ${bg};
  color: #ffffff;
`;

const Heading = styled.h1`
  color: #ffd700;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primaryColor};

  ${({ theme, bg }) => css`
    color: ${theme.colors.white};
    ${changeBackground(theme, bg)}
  `}
`;

export const Container2 = styled(Container).attrs({ as: 'article' })`
  background: green;

  ${Heading} {
    color: #ffffff;
  }

  ${Heading}: hover {
    color: green;
  }

  &:hover {
    background: #ffffff;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container bg="red">
        <Heading>oi</Heading>
      </Container>
      <Container2 bg="red">
        <Heading>oi</Heading>
      </Container2>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
