import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const surface = ({ shape }: Theme) => css`
  border-radius: ${`${shape.borderRadius.main}px`};
  border: none;
  outline: none;
  user-select: none;
`;
