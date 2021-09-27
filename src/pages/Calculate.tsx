import { useForm, Controller } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid } from '@mui/material';
import {
  WiredInput,
  WiredButton,
  WiredDivider,
  WiredItem,
} from 'react-wired-elements';
import { ReportItem } from './ReportItem';
import type { Report } from './types';
import { schema } from './schema';

interface Inputs {
  token: string;
  academicYearId: number;
  studentProfileId: number;
}

interface Props extends Inputs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  studentProfile: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reports: Report[];
}

export const Calculate = ({
  token,
  academicYearId,
  studentProfileId,
  studentProfile,
  reports,
}: Props) => {
  const shortName = studentProfile?.short_name ?? '';
  const className = studentProfile?.class_unit?.name ?? '';
  const studentProfileCapton = `${shortName} "${className}"`;

  const { control, handleSubmit } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      token,
      academicYearId,
      studentProfileId,
    },
  });

  const onSave = async (inputs: Props) => {
    //
  };

  return (
    <>
      <Grid container spacing={1} my={1}>
        <Grid
          container
          item
          xs={12}
          spacing={1}
          alignItems="baseline"
          justifyContent="space-between"
        >
          <Grid container item xs={6} spacing={1} alignItems="baseline">
            <Grid item>
              <WiredItem>Токен</WiredItem>
              <Controller
                name="token"
                control={control}
                render={({ field }) => (
                  <WiredInput
                    {...field}
                    placeholder="Введите значение"
                    type="text"
                  />
                )}
              />
            </Grid>
            <Grid item>
              <WiredButton
                // @ts-ignore
                onClick={handleSubmit(onSave)}
              >
                Обновить
              </WiredButton>
            </Grid>
          </Grid>
          <Grid container item xs={6} justifyContent="flex-end">
            <WiredItem value="academic_year_id">
              {studentProfileCapton}
            </WiredItem>
          </Grid>
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
              <ReportItem {...report} />
            </Grid>
          ))}
      </Grid>
      <DevTool control={control} />
    </>
  );
};
