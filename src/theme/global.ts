import { css } from '@emotion/react';
import type { Theme } from './types';

export const global = ({ palette, typography }: Theme) => css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${typography.fontFamily.primary};
    background: ${palette.layout.neutral};
    overflow-y: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
