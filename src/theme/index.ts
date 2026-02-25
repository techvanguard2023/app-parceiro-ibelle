import { StyleSheet } from 'react-native';

export const colors = {
  // Primary
  primary: '#2f80ed',
  secondary: '#ff2a6b',
  
  // Status
  success: '#31c48d',
  warning: '#f2c94c',
  error: '#eb5757',
  danger: '#eb5757',
  
  // Neutrals
  dark: '#333333',
  darkBg: '#1f2a37',
  text: '#333333',
  textLight: 'rgba(0, 0, 0, 0.50)',
  
  // Backgrounds
  white: '#ffffff',
  gray: '#f5f5f5',
  
  // Accents
  accent1: '#219653',
  accent2: '#014737',
};

export const typography = {
  fontFamily: 'System',
  sizes: {
    h1: 32,
    h2: 28,
    h3: 24,
    body: 16,
    caption: 12,
  },
  weights: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const shadows = {
  small: {
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  large: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
};

export const theme = {
  colors,
  typography,
  spacing,
  shadows,
};

export default theme;