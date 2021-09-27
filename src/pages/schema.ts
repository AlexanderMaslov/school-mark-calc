import * as yup from 'yup';

export const schema = yup.object({
  token: yup.string().required('пустое поле'),
  academicYearId: yup.number().required('пустое поле'),
  studentProfileId: yup.number().required('пустое поле'),
});
