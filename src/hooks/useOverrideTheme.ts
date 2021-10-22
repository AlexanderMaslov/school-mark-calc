import { createTheme, PaletteMode } from '@mui/material';

interface Props {
  mode?: PaletteMode;
}

export const useOverrideTheme = ({ mode = 'light' }: Props = {}) => {
  const theme = createTheme({
    palette: { mode },
  });
  return theme;
};
