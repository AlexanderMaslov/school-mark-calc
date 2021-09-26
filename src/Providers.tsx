import React from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import { defaultTheme, global } from 'theme';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global styles={global} />
      {children}
    </ThemeProvider>
  );
};
