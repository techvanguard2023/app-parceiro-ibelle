import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { theme } from '../theme';
import { InputState } from '../types';

interface InputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  state?: InputState;
  icon?: React.ReactNode;
  label?: string;
  error?: string;
  disabled?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChangeText,
  placeholder = 'Enter text...',
  state = 'initial',
  icon,
  label,
  error,
  disabled = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const getStateStyles = () => {
    switch (state) {
      case 'active':
      case 'typing':
        return {
          borderColor: theme.colors.primary,
          backgroundColor: '#f8f9ff',
        };
      case 'success':
        return {
          borderColor: theme.colors.success,
          backgroundColor: '#f0fdf4',
        };
      case 'error':
      case 'danger':
        return {
          borderColor: theme.colors.error,
          backgroundColor: '#fef2f2',
        };
      case 'disabled':
        return {
          borderColor: theme.colors.gray,
          backgroundColor: theme.colors.gray,
        };
      default:
        return {
          borderColor: '#e5e7eb',
          backgroundColor: theme.colors.white,
        };
    }
  };

  const stateStyles = getStateStyles();

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.inputWrapper,
          stateStyles,
          isFocused && { borderColor: theme.colors.primary },
        ]}
      >
        {icon && <View style={styles.icon}>{icon}</View>}
        <TextInput
          style={[styles.input, disabled && styles.inputDisabled]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          editable={!disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor={theme.colors.textLight}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.sm,
  },
  label: {
    fontSize: theme.typography.sizes.caption,
    fontWeight: theme.typography.weights.semibold,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: theme.spacing.md,
    height: 48,
  },
  input: {
    flex: 1,
    fontSize: theme.typography.sizes.body,
    color: theme.colors.text,
  },
  inputDisabled: {
    opacity: 0.5,
  },
  icon: {
    marginRight: theme.spacing.sm,
  },
  error: {
    fontSize: theme.typography.sizes.caption,
    color: theme.colors.error,
    marginTop: theme.spacing.xs,
  },
});