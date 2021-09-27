import { css } from '@emotion/react';

export const global = () => css`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-y: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
