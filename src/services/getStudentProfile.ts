export const getStudentProfile = async () => {
  const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN ?? '';
  const STUDENT_PROFILE_ID = process.env.REACT_APP_STUDENT_PROFILE_ID ?? '';

  return (
    await fetch(`/core/api/student_profiles/${STUDENT_PROFILE_ID}?`, {
      headers: { 'auth-token': AUTH_TOKEN },
    })
  ).json();
};
