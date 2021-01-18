const fonts = {
  body:
    '-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
};
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const radii = {
  default: 6,
  circle: 99999,
};
const colors = {
  text: '#212529',
  muted: '#dee2e6',
  primary: '#007bff',
  danger: '#dc3545',
  blues: {
    light: '#dcedff',
    dark: '#004896',
  },
};
const sizes = {
  navbar: 64,
  spinner: 32,
};
const shadows = {
  card: '0 0 4px rgba(0, 0, 0, .125)',
};
const breakpoints = ['576px', '768px', '992px', '1200px'];

export const theme = {
  fonts,
  fontSizes,
  space,
  radii,
  colors,
  sizes,
  shadows,
  breakpoints,
};

export type ThemeType = typeof theme;
