import React from 'react';
import { useOverrideTheme } from 'hooks';
import { ThemeProvider } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  const theme = useOverrideTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
