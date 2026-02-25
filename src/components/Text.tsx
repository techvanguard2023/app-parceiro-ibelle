import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { theme } from '../theme';

type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption';

interface TextProps {
  variant?: TextVariant;
  children: React.ReactNode;
  color?: string;
  style?: any;
}

export const Text: React.FC<TextProps> = ({ 
  variant = 'body', 
  children, 
  color = theme.colors.text,
  style 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'h1':
        return styles.h1;
      case 'h2':
        return styles.h2;
      case 'h3':
        return styles.h3;
      case 'caption':
        return styles.caption;
      default:
        return styles.body;
    }
  };

  return (
    <RNText 
      style={[
        getVariantStyles(), 
        { color },
        style
      ]}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: theme.typography.sizes.h1,
    fontWeight: theme.typography.weights.bold,
  },
  h2: {
    fontSize: theme.typography.sizes.h2,
    fontWeight: theme.typography.weights.bold,
  },
  h3: {
    fontSize: theme.typography.sizes.h3,
    fontWeight: theme.typography.weights.semibold,
  },
  body: {
    fontSize: theme.typography.sizes.body,
    fontWeight: theme.typography.weights.regular,
  },
  caption: {
    fontSize: theme.typography.sizes.caption,
    fontWeight: theme.typography.weights.regular,
  },
});