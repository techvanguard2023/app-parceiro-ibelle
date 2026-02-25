import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Button, Text, Card } from '../components';
import { theme } from '../theme';

type HomeScreenProps = {
  navigation: any;
};

interface Parcelamento {
  id: string;
  name: string;
  amount: number;
  status: 'pending' | 'approved' | 'paid';
  date: string;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [parcelamentos] = useState<Parcelamento[]>([
    {
      id: '1',
      name: 'Parcelamento A',
      amount: 1500.00,
      status: 'pending',
      date: '15/03/2026',
    },
    {
      id: '2',
      name: 'Parcelamento B',
      amount: 2000.00,
      status: 'approved',
      date: '20/03/2026',
    },
    {
      id: '3',
      name: 'Parcelamento C',
      amount: 3000.00,
      status: 'paid',
      date: '10/02/2026',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return theme.colors.warning;
      case 'approved':
        return theme.colors.primary;
      case 'paid':
        return theme.colors.success;
      default:
        return theme.colors.textLight;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pendente';
      case 'approved':
        return 'Aprovado';
      case 'paid':
        return 'Pago';
      default:
        return status;
    }
  };

  const renderParcelamento = ({ item }: { item: Parcelamento }) => (
    <Card
      onPress={() => navigation.navigate('ParcelamentoDetails', { id: item.id })}
      elevated
    >
      <View style={styles.itemHeader}>
        <Text variant="h3">{item.name}</Text>
        <Text
          variant="caption"
          color={getStatusColor(item.status)}
        >
          {getStatusText(item.status)}
        </Text>
      </View>
      <View style={styles.itemBody}>
        <Text variant="body" color={theme.colors.textLight}>
          Valor
        </Text>
        <Text variant="h2" color={theme.colors.primary}>
          R$ {item.amount.toFixed(2)}
        </Text>
      </View>
      <View style={styles.itemFooter}>
        <Text variant="caption" color={theme.colors.textLight}>
          Vencimento: {item.date}
        </Text>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text variant="h1" color={theme.colors.primary}>
            Olá, Robson!
          </Text>
          <Text variant="body" color={theme.colors.textLight}>
            Seus parcelamentos
          </Text>
        </View>

        <View style={styles.summaryContainer}>
          <Card elevated style={styles.summaryCard}>
            <Text variant="caption" color={theme.colors.textLight}>
              Total em Parcelamentos
            </Text>
            <Text variant="h2" color={theme.colors.primary}>
              R$ 6.500,00
            </Text>
          </Card>
        </View>

        <View style={styles.content}>
          <View style={styles.sectionHeader}>
            <Text variant="h3">Parcelamentos</Text>
            <Button
              title="Novo"
              onPress={() => navigation.navigate('NewParcelamento')}
              variant="primary"
              size="small"
            />
          </View>

          <FlatList
            data={parcelamentos}
            renderItem={renderParcelamento}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={{ height: theme.spacing.md }} />}
          />
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
  summaryContainer: {
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },
  summaryCard: {
    padding: theme.spacing.lg,
  },
  content: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  itemBody: {
    marginVertical: theme.spacing.md,
  },
  itemFooter: {
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
});