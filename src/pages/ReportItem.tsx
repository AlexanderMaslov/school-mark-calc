import { useTheme } from '@mui/material';
import { Grid } from '@mui/material';
import { WiredItem } from 'react-wired-elements';
import type { Report } from './types';

export const ReportItem = ({ subject_name = '', periods = [] }: Report) => {
  const theme = useTheme();

  const marks = periods[0]?.marks ?? [];

  return (
    <>
      <Grid item>
        <WiredItem>{subject_name}</WiredItem>
      </Grid>
      {marks.map((mark) => (
        <Grid item key={mark.id}>
          <WiredItem
            color={theme.palette.info.main}
            style={{ fontSize: 22, fontWeight: 'bold' }}
          >
            {mark.values[0].five}
          </WiredItem>
        </Grid>
      ))}
    </>
  );
};
