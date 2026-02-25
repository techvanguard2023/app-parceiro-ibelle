import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { InputField, Button, Text, Card } from '../components';
import { theme } from '../theme';

type SignupPersonalScreenProps = {
  navigation: any;
};

export const SignupPersonalScreen: React.FC<SignupPersonalScreenProps> = ({ navigation }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    cpf: '',
    birthDate: '',
  });

  const handleNext = () => {
    if (formData.firstName && formData.lastName && formData.cpf && formData.birthDate) {
      navigation.navigate('SignupPublic');
    }
  };

  const isFormValid = 
    formData.firstName.length > 0 && 
    formData.lastName.length > 0 && 
    formData.cpf.length > 0 && 
    formData.birthDate.length > 0;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text variant="h2" color={theme.colors.primary}>
            Crie sua conta
          </Text>
          <Text variant="body" color={theme.colors.textLight}>
            Etapa 1 - Dados Pessoais
          </Text>
        </View>

        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: '25%', backgroundColor: theme.colors.primary }]} />
          <View style={[styles.progress, { width: '75%', backgroundColor: '#e5e7eb' }]} />
        </View>

        <View style={styles.content}>
          <Card elevated>
            <InputField
              label="Primeiro Nome"
              placeholder="João"
              value={formData.firstName}
              onChangeText={(text) => setFormData({ ...formData, firstName: text })}
              state={formData.firstName ? 'active' : 'initial'}
            />

            <InputField
              label="Sobrenome"
              placeholder="Silva"
              value={formData.lastName}
              onChangeText={(text) => setFormData({ ...formData, lastName: text })}
              state={formData.lastName ? 'active' : 'initial'}
            />

            <InputField
              label="CPF"
              placeholder="000.000.000-00"
              value={formData.cpf}
              onChangeText={(text) => setFormData({ ...formData, cpf: text })}
              state={formData.cpf ? 'active' : 'initial'}
            />

            <InputField
              label="Data de Nascimento"
              placeholder="DD/MM/YYYY"
              value={formData.birthDate}
              onChangeText={(text) => setFormData({ ...formData, birthDate: text })}
              state={formData.birthDate ? 'active' : 'initial'}
            />

            <View style={styles.buttonContainer}>
              <Button
                title="Próximo"
                onPress={handleNext}
                variant="primary"
                disabled={!isFormValid}
              />
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
  progressBar: {
    flexDirection: 'row',
    height: 4,
    marginHorizontal: theme.spacing.lg,
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: theme.spacing.lg,
  },
  progress: {
    height: 4,
  },
  content: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
  },
  buttonContainer: {
    marginVertical: theme.spacing.lg,
  },
});