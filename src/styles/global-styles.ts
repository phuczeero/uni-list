import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  * {
    font-family: ${p => p.theme.fonts.body};
    color: ${p => p.theme.colors.text}
  }
`;
