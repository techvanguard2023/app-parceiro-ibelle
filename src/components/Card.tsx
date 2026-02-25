import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { theme } from '../theme';

interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  elevated?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, onPress, elevated = false }) => {
  const shadowStyle = elevated ? theme.shadows.medium : theme.shadows.small;

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={({ pressed }) => [
        styles.card,
        shadowStyle,
        pressed && onPress && styles.pressed,
      ]}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: theme.spacing.md,
    marginVertical: theme.spacing.sm,
  },
  pressed: {
    opacity: 0.95,
  },
});