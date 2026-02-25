import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { InputField, Button, Text, Card } from '../components';
import { theme } from '../theme';

type LoginScreenProps = {
  navigation: any;
};

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (text: string) => {
    setEmail(text);
    if (text.includes('@')) {
      setEmailError('');
    }
  };

  const handleLogin = async () => {
    if (!email.includes('@')) {
      setEmailError('Email inválido');
      return;
    }
    if (password.length < 6) {
      return;
    }
    
    setIsLoading(true);
    // Simula login
    setTimeout(() => {
      setIsLoading(false);
      navigation.replace('Home');
    }, 1500);
  };

  const isFormValid = email.includes('@') && password.length >= 6;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text variant="h2" color={theme.colors.primary}>
            Bem-vindo
          </Text>
          <Text variant="body" color={theme.colors.textLight}>
            Entre na sua conta
          </Text>
        </View>

        <View style={styles.content}>
          <Card elevated>
            <InputField
              label="Email"
              placeholder="seu@email.com"
              value={email}
              onChangeText={validateEmail}
              state={emailError ? 'error' : email ? 'success' : 'initial'}
              error={emailError}
            />

            <InputField
              label="Senha"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              state={password.length > 0 ? 'active' : 'initial'}
              error={password.length > 0 && password.length < 6 ? 'Min. 6 caracteres' : undefined}
            />

            <View style={styles.rememberContainer}>
              <TouchableOpacity>
                <Text variant="caption" color={theme.colors.primary}>
                  Esqueci minha senha
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <Button
                title={isLoading ? 'Entrando...' : 'Entrar'}
                onPress={handleLogin}
                variant="primary"
                disabled={!isFormValid || isLoading}
                loading={isLoading}
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.signupContainer}>
              <Text variant="body" color={theme.colors.textLight}>
                Não tem conta?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text variant="body" color={theme.colors.primary}>
                  Cadastre-se aqui
                </Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
  scroll: {
    flex: 1,
  },
  header: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
  },
  rememberContainer: {
    marginVertical: theme.spacing.md,
    alignItems: 'flex-end',
  },
  buttonContainer: {
    marginVertical: theme.spacing.lg,
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: theme.spacing.md,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});