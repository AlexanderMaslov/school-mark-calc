export const getStudentProfile = async ({
  studentProfileId,
  token,
}: {
  studentProfileId: number;
  token: string;
}) => {
  return (
    await fetch(`/core/api/student_profiles/${studentProfileId}?`, {
      headers: { 'auth-token': token },
    })
  ).json();
};
