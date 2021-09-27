export const getReports = async ({
  studentProfileId,
  academicYearId,
  token,
}: {
  studentProfileId: number;
  academicYearId: number;
  token: string;
}) => {
  return (
    await fetch(
      `/reports/api/progress/json?academic_year_id=${academicYearId}&student_profile_id=${studentProfileId}`,
      {
        headers: { 'auth-token': token },
      }
    )
  ).json();
};
