import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { theme } from '../theme';
import { Text } from '../components';

type SplashScreenProps = {
  navigation: any;
};

export const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    // Simula carregamento
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text variant="h1" color={theme.colors.primary}>
            iBelle
          </Text>
          <Text variant="body" color={theme.colors.textLight}>
            App Parceiro
          </Text>
        </View>
        <Text variant="caption" color={theme.colors.textLight} style={styles.loading}>
          Carregando...
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  loading: {
    marginTop: theme.spacing.lg,
  },
});