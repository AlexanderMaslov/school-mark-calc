import '@emotion/react';
import type { Theme as Base } from './types';

declare module '@emotion/react' {
  export interface Theme extends Base {}
}
