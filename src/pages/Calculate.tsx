import type { RouteComponentProps } from '@reach/router';
import { useForm, Controller } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  WiredInput,
  WiredButton,
  WiredDivider,
  WiredItem,
} from 'react-wired-elements';

const DEFAULT_TOKEN =
  'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI5MDE5NzQiLCJhdWQiOiIyOjIiLCJuYmYiOjE2MzIzNDM3NzcsIm1zaCI6ImIwYzYyZmE4LWE3YmMtNGQzZi04OWZlLTI5OGFhZmE5ODlkNyIsImlzcyI6Imh0dHBzOlwvXC9zY2hvb2wubW9zLnJ1IiwicmxzIjoiezI6WzIxOjI6W10sMzE6NDpbXSw0MToxOltdXX0iLCJyZ24iOmZhbHNlLCJleHAiOjE2MzMyMDc3NzcsImlhdCI6MTYzMjM0Mzc3NywianRpIjoiZGQwNzdkMWQtYzdlOS00ODIxLTg3N2QtMWRjN2U5YjgyMWYxIiwic3NvIjoiOTQwYTEzOTctMDlmYy00MjdlLTlmMDAtNzkzYTE4NGJlOTRjIn0.e92ugdfQa-l89k9H4FFaIAh9WEc8bxlMPcAvgt7CA4k-7sZasenJ7VQDU4E9vW-l-cmbRMRyCv742eGXK92PllFOfGRd-f4MBWPC_gfF6bqznF5MBWwWEj8NWyabx19jcjO2IDMgfO3nljJ_HZFxxKh_BM_2wnpQpctmOwnhaCDUOU0pPLLScCAlMSrQFYeJsxdqOKplY4ioelUesSWK8-yDU5ClO22jrDkDrduqdFYjC43FZ-eZd7TaUzLwhUSu9yJogmNFx6Gwcp2nIQB1d_by7O1rRjuKQ1DnAqXopHZ1OTlI8X6MiORNuqFTFM4_Qxvla0PUcGaqMaqYK0A6rw';

const ACADEMIC_YEAR_ID = 9;
const STUDENT_PROFILE_ID = 5808863;

interface FormInputs {
  token: string;
  academic_year_id: number;
  student_profile_id: number;
}

const schema = yup.object({
  token: yup.string().required('пустое поле'),
  academic_year_id: yup.number().required('пустое поле'),
  student_profile_id: yup.number().required('пустое поле'),
});

export const Calculate = (props: RouteComponentProps) => {
  const { control, handleSubmit } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      token: DEFAULT_TOKEN,
      academic_year_id: ACADEMIC_YEAR_ID,
      student_profile_id: STUDENT_PROFILE_ID,
    },
  });

  const onSave = async (inputs: FormInputs) => {
    //
  };

  return (
    <>
      <form>
        <WiredItem value="token">Токен</WiredItem>
        <Controller
          name="token"
          control={control}
          render={({ field }) => (
            <WiredInput {...field} placeholder="Введите значение" type="text" />
          )}
        />
        <WiredButton
          // @ts-ignore
          onClick={handleSubmit(onSave)}
        >
          Обновить
        </WiredButton>
        <WiredDivider />

        <WiredItem value="academic_year_id">Учебный год</WiredItem>
        <Controller
          name="academic_year_id"
          control={control}
          render={({ field }) => (
            // @ts-ignore
            <WiredInput
              {...field}
              disabled
              placeholder="Введите значение"
              type="number"
            />
          )}
        />
        <WiredItem value="student_profile_id">Учащийся</WiredItem>
        <Controller
          name="student_profile_id"
          control={control}
          render={({ field }) => (
            // @ts-ignore
            <WiredInput
              {...field}
              disabled
              placeholder="Введите значение"
              type="number"
            />
          )}
        />
      </form>

      <DevTool control={control} />
    </>
  );
};
