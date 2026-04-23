import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS } from '../constants/theme.js';

const contatos = [
  { icon: '📧', label: 'E-mail', valor: 'contato@guiaturistico.com' },
  { icon: '📞', label: 'Telefone', valor: '+55 (19) 9999-0000' },
  { icon: '📍', label: 'Endereço', valor: 'Campinas, SP — Brasil' },
  { icon: '🌐', label: 'Website', valor: 'www.guiaturistico.com' },
  { icon: '📸', label: 'Instagram', valor: '@guiaturistico' },
];

export default function ContatoScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.label}>FALE CONOSCO</Text>
      <Text style={styles.title}>Contato</Text>
      <View style={styles.divider} />
      <Text style={styles.subtitle}>
        Tem sugestões, dúvidas ou quer indicar um local para o nosso guia? Entre em contato!
      </Text>

      {contatos.map((c, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardIcon}>{c.icon}</Text>
          <View>
            <Text style={styles.cardLabel}>{c.label}</Text>
            <Text style={styles.cardValor}>{c.valor}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.lg,
    paddingBottom: SPACING.xxl,
  },
  label: {
    color: COLORS.accent,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    marginBottom: SPACING.sm,
  },
  title: {
    color: COLORS.text,
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'serif',
    marginBottom: SPACING.md,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginBottom: SPACING.lg,
  },
  subtitle: {
    color: COLORS.textSecondary,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: SPACING.xl,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.sm,
  },
  cardIcon: {
    fontSize: 24,
  },
  cardLabel: {
    color: COLORS.accent,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 2,
  },
  cardValor: {
    color: COLORS.text,
    fontSize: 14,
  },
});
