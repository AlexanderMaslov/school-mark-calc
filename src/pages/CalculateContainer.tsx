import React from 'react';
import type { RouteComponentProps } from '@reach/router';
import { getStudentProfile, getReports } from 'services';
import { Container } from '@mui/material';
import { Calculate } from './Calculate';

export const CalculateContainer = ({ path }: RouteComponentProps) => {
  // FIXME:
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [studentProfile, setStudentProfile] = React.useState<any>(null);
  // FIXME:
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [reports, setReports] = React.useState<any>(null);

  const fetchProfile = React.useCallback(async () => {
    try {
      const studentProfile = await getStudentProfile();
      setStudentProfile(studentProfile);
    } catch (ex) {
      //
    }
  }, []);

  const fetchReports = React.useCallback(async () => {
    try {
      const reports = await getReports();
      setReports(reports);
    } catch (ex) {
      //
    }
  }, []);

  React.useEffect(() => {
    fetchProfile();
    fetchReports();
  }, [fetchProfile, fetchReports]);

  return (
    <Container>
      <Calculate studentProfile={studentProfile} reports={reports} />
    </Container>
  );
};
