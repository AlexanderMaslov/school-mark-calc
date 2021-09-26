import { lightBlue, blue, lightGreen, red, gray, white } from './colors';
import { fontFamily, typeScale } from './typography';
import type { Theme } from './types';

export const defaultTheme: Theme = {
  palette: {
    primary: {
      main: lightBlue[300],
    },
    secondary: {
      main: blue[500],
      accent: blue['A700'],
      light: blue[50],
    },
    layout: {
      main: white[50],
      neutral: gray[100],
      contrast: gray[950],
      reduced: gray[850],
    },
    success: {
      main: lightGreen[500],
    },
    error: {
      main: red[600],
      accent: red['A700'],
    },
    disabled: {
      main: gray[600],
      contrast: '',
    },
  },
  spacing: 8,
  typography: { fontFamily, typeScale },
  iconography: { width: 14, height: 14 },
  shape: {
    borderRadius: {
      main: 6,
      small: 3,
    },
  },
  elevation: {
    main: ['none'],
  },
};
