import React from 'react';
import { useTheme } from '@mui/material';
import { Grid } from '@mui/material';
import { WiredDivider, WiredItem } from 'react-wired-elements';
import { ReportItem } from './ReportItem';
import type { Report } from './types';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  studentProfile: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reports: Report[];
}

export const Calculate = ({ studentProfile, reports }: Props) => {
  const theme = useTheme();
  const [sum, setSum] = React.useState(0);

  const shortName = studentProfile?.short_name ?? '';
  const className = studentProfile?.class_unit?.name ?? '';
  const studentProfileCapton = `${shortName} "${className}"`;

  return (
    <>
      <Grid container spacing={1} my={1}>
        <Grid container item xs={12} justifyContent="space-between">
          <WiredItem
            color={theme.palette.info.main}
            style={{ fontSize: 22, fontWeight: 'bold' }}
          >
            Сумма: {sum} руб.
          </WiredItem>
          <WiredItem>{studentProfileCapton}</WiredItem>
        </Grid>
        <Grid item xs={12}>
          <WiredDivider />
        </Grid>

        {reports?.length &&
          reports.map((report, index) => (
            <Grid
              container
              item
              xs={12}
              key={`${report?.subject_name ?? 'report'}-${index}`}
            >
              <ReportItem {...report} setSum={setSum} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};
