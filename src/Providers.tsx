import React from 'react';
import { useOverrideTheme } from 'hooks';
import { ThemeProvider, Global } from '@emotion/react';
import { global } from 'theme';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  const theme = useOverrideTheme();

  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      {children}
    </ThemeProvider>
  );
};
