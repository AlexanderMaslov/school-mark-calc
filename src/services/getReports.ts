export const getReports = async () => {
  const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN ?? '';
  const ACADEMIC_YEAR_ID = process.env.REACT_APP_ACADEMIC_YEAR_ID ?? '';
  const STUDENT_PROFILE_ID = process.env.REACT_APP_STUDENT_PROFILE_ID ?? '';

  return (
    await fetch(
      `/reports/api/progress/json?academic_year_id=${ACADEMIC_YEAR_ID}&student_profile_id=${STUDENT_PROFILE_ID}`,
      {
        headers: {
          'auth-token': AUTH_TOKEN,
        },
      }
    )
  ).json();
};
