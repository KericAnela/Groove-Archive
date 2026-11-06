export const Colors = {
  light: {
    text: '#2C221E',
    muted: '#7A6B63',
    background: '#FAF7F5',
    card: '#F2ECE6',
    border: '#E1D6CD',
    primary: '#8C4A32',
    onPrimary: '#FFFFFF',
  },
  dark: {
    text: '#F5EBE6',
    muted: '#B8A89F',
    background: '#1A1412',
    card: '#27201D',
    border: '#3D322E',
    primary: '#D9826B',
    onPrimary: '#1A1412',
  },
} as const;

export type Theme = (typeof Colors)['light'];

export const Spacing = { 
  xs: 4, 
  sm: 8, 
  md: 16, 
  lg: 24, 
  xl: 32 
} as const;

export const FontSize = { 
  small: 13, 
  body: 16, 
  title: 20, 
  hero: 28 
} as const;

export const Radius = { 
  sm: 8, 
  md: 12, 
  pill: 999 
} as const;