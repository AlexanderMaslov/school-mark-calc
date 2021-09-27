import React from 'react';
import type { RouteComponentProps } from '@reach/router';
import { getStudentProfile, getReports } from 'services';
import { Container } from '@mui/material';
import { Calculate } from './Calculate';

interface Props extends RouteComponentProps {
  token: string;
  academicYearId: number;
  studentProfileId: number;
}

export const CalculateContainer = ({
  token,
  academicYearId,
  studentProfileId,
}: Props) => {
  // FIXME:
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [studentProfile, setStudentProfile] = React.useState<any>(null);
  // FIXME:
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [reports, setReports] = React.useState<any>(null);

  const fetchProfile = React.useCallback(
    async ({
      studentProfileId,
      token,
    }: {
      studentProfileId: number;
      token: string;
    }) => {
      try {
        const studentProfile = await getStudentProfile({
          studentProfileId,
          token,
        });
        setStudentProfile(studentProfile);
      } catch (ex) {
        //
      }
    },
    []
  );

  const fetchReports = React.useCallback(
    async ({
      studentProfileId,
      academicYearId,
      token,
    }: {
      studentProfileId: number;
      academicYearId: number;
      token: string;
    }) => {
      try {
        const reports = await getReports({
          studentProfileId,
          academicYearId,
          token,
        });
        setReports(reports);
      } catch (ex) {
        //
      }
    },
    []
  );

  React.useEffect(() => {
    if (!studentProfileId || !academicYearId || !token) return;

    fetchProfile({ studentProfileId, token });
    fetchReports({ studentProfileId, academicYearId, token });
  }, [academicYearId, studentProfileId, token, fetchProfile, fetchReports]);

  return (
    <Container>
      <Calculate
        token={token}
        academicYearId={academicYearId}
        studentProfileId={studentProfileId}
        studentProfile={studentProfile}
        reports={reports}
      />
    </Container>
  );
};
