import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { InputField, Button, Card, Text } from './components';
import { theme } from './theme';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailState, setEmailState] = useState<'initial' | 'success' | 'error'>('initial');

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (text.includes('@')) {
      setEmailState('success');
    } else {
      setEmailState('initial');
    }
  };

  const handleLogin = () => {
    if (email && password) {
      alert('Login bem-sucedido!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <Text variant="h1" color={theme.colors.primary}>
            App Parceiro
          </Text>
          <Text variant="caption" color={theme.colors.textLight}>
            iBelle - Login
          </Text>
        </View>

        <View style={styles.content}>
          <Card elevated>
            <Text variant="h3" style={styles.formTitle}>
              Entre na sua conta
            </Text>

            <InputField
              label="Email"
              placeholder="seu@email.com"
              value={email}
              onChangeText={handleEmailChange}
              state={emailState}
            />

            <InputField
              label="Senha"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              state={password.length > 0 ? 'active' : 'initial'}
              error={password.length > 0 && password.length < 6 ? 'Min. 6 caracteres' : undefined}
            />

            <View style={styles.buttonContainer}>
              <Button
                title="Entrar"
                onPress={handleLogin}
                variant="primary"
                size="medium"
                disabled={!email || !password}
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.signupContainer}>
              <Text variant="body" color={theme.colors.textLight}>
                Não tem conta?{' '}
              </Text>
              <Button
                title="Cadastre-se"
                onPress={() => alert('Ir para cadastro')}
                variant="ghost"
              />
            </View>
          </Card>

          {/* Component Showcase */}
          <Card style={styles.showcase}>
            <Text variant="h3" style={styles.showcaseTitle}>
              Componentes
            </Text>

            <View style={styles.buttonGroup}>
              <Button title="Primário" onPress={() => {}} size="small" />
              <Button title="Secundário" onPress={() => {}} variant="secondary" size="small" />
              <Button title="Outline" onPress={() => {}} variant="outline" size="small" />
            </View>

            <View style={styles.inputGroup}>
              <InputField
                label="Ativo"
                value="Texto"
                onChangeText={() => {}}
                state="active"
              />
              <InputField
                label="Sucesso"
                value="✓ Válido"
                onChangeText={() => {}}
                state="success"
              />
              <InputField
                label="Erro"
                value="Inválido"
                onChangeText={() => {}}
                state="error"
                error="Campo obrigatório"
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
  content: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
  },
  formTitle: {
    marginBottom: theme.spacing.lg,
  },
  buttonContainer: {
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.md,
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
  },
  showcase: {
    marginTop: theme.spacing.lg,
  },
  showcaseTitle: {
    marginBottom: theme.spacing.md,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
  },
  inputGroup: {
    gap: theme.spacing.md,
  },
});