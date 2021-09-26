export interface Theme {
  palette: {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
      accent?: string;
      light?: string;
    };
    layout: {
      main: string;
      neutral: string;
      contrast: string;
      reduced: string;
    };
    success: {
      main: string;
    };
    error: {
      main: string;
      accent?: string;
    };
    disabled: {
      main: string;
      contrast?: string;
    };
  };
  spacing: number;
  typography: {
    fontFamily: {
      primary: string;
    };
    typeScale: {
      header1: number;
      header2: number;
      header3: number;
      header4: number;
      header5: number;
      header6: number;
      body: number;
      subtitle: number;
    };
  };
  iconography: {
    width: number;
    height: number;
  };
  breakpoints?: number[];
  shape: {
    borderRadius: {
      main: number;
      small?: number;
    };
  };
  elevation: {
    main?: string[];
  };
}

export type Spacing = Record<
  'm' | 'mt' | 'mb' | 'ml' | 'mr' | 'p' | 'pt' | 'pb' | 'pl' | 'pr',
  number
>;
