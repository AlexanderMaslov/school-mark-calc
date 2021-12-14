import React from 'react';
import { useTheme } from '@mui/material';
import { Grid } from '@mui/material';
import { WiredItem } from 'react-wired-elements';
import type { Report, PreparedMarks } from './types';
import { rule } from './utils';

const ACADEMIC_PERIOD: number =
  Number(process.env.REACT_APP_ACADEMIC_PERIOD) ?? 0;

interface Props extends Report {
  setSum: React.Dispatch<React.SetStateAction<number>>;
}

export const ReportItem = ({
  subject_name = '',
  periods = [],
  setSum,
}: Props) => {
  const theme = useTheme();

  const marks = periods[ACADEMIC_PERIOD]?.marks ?? [];
  const preparedMarks = marks.reduce(
    (prev, curr) => {
      const value = curr.values[0].five;
      if (value === 5) return { ...prev, 5: prev[5] + 1 * curr.weight };
      if (value === 4) return { ...prev, 4: prev[4] + 1 * curr.weight };
      if (value === 3) return { ...prev, 3: prev[3] + 1 * curr.weight };
      if (value === 2) return { ...prev, 2: prev[2] + 1 * curr.weight };
      return prev;
    },
    {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
    } as PreparedMarks
  );

  const subjectSum = rule(preparedMarks);

  React.useEffect(() => {
    if (!subjectSum) return;

    setSum((prev) => prev + subjectSum);
  }, [subjectSum, setSum]);

  return (
    <>
      <Grid item>
        <WiredItem>{subject_name}</WiredItem>
      </Grid>
      {Object.entries(preparedMarks).map(([mark, value]) => {
        if (value === 0) return null;

        return (
          <Grid item key={`${subject_name}-${mark}`}>
            <WiredItem
              color={theme.palette.info.main}
              style={{ fontSize: 22, fontWeight: 'bold' }}
            >
              {mark}x{value}
            </WiredItem>
          </Grid>
        );
      })}
      <WiredItem style={{ fontSize: 16, fontWeight: 'bold' }}>
        {subjectSum} руб.
      </WiredItem>
    </>
  );
};
