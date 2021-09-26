import { css } from '@emotion/react';
import type { Theme, Spacing } from 'theme';

export const spacing = (
  { spacing }: Theme,
  { m, mt, mb, ml, mr, p, pt, pb, pl, pr }: Spacing
) => css`
  margin: ${`${m * spacing}px`};
  margin-top: ${`${mt * spacing}px`};
  margin-left: ${`${ml * spacing}px`};
  margin-bottom: ${`${mb * spacing}px`};
  margin-right: ${`${mr * spacing}px`};
  padding: ${`${p * spacing}px`};
  padding-top: ${`${pt * spacing}px`};
  padding-left: ${`${pl * spacing}px`};
  padding-bottom: ${`${pb * spacing}px`};
  padding-right: ${`${pr * spacing}px`};
`;
