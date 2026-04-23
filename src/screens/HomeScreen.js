import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS } from '../constants/theme.js';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <ImageBackground
          source={{ uri: HERO_IMAGE }}
          style={styles.hero}
          imageStyle={styles.heroImage}
        >
          <View style={styles.heroOverlay}>
            <Text style={styles.heroSubtitle}>BEM-VINDO AO</Text>
            <Text style={styles.heroTitle}>Guia Turístico</Text>
            <Text style={styles.heroCity}>Londres</Text>
          </View>
        </ImageBackground>

        {/* Cards de seção */}
        <View style={styles.content}>
          {/* Card Pontos Turísticos */}
          <TouchableOpacity
            style={styles.sectionCard}
            onPress={() => navigation.navigate('PontosTuristicos')}
            activeOpacity={0.85}
          >
            <ImageBackground
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/British_Museum_from_NE_2.JPG/1200px-British_Museum_from_NE_2.JPG',
              }}
              style={styles.cardImage}
              imageStyle={{ borderRadius: BORDER_RADIUS.lg }}
            >
              <View style={styles.cardOverlay}>
                <Text style={styles.cardIcon}>🏛️</Text>
                <Text style={styles.cardTitle}>Atrações e Marcos Históricos</Text>
                <Text style={styles.cardDesc}>
                  Explore o que Londres tem de melhor. Dos monumentos icônicos que definem o horizonte
                  da cidade aos tesouros escondidos em seus bairros históricos. Descubra os lugares que
                  você não pode deixar de visitar em sua jornada pela capital britânica.
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          {/* Card Restaurantes */}
          <TouchableOpacity
            style={styles.sectionCard}
            onPress={() => navigation.navigate('Restaurantes')}
            activeOpacity={0.85}
          >
            <ImageBackground
              source={{
                uri: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
              }}
              style={styles.cardImage}
              imageStyle={{ borderRadius: BORDER_RADIUS.lg }}
            >
              <View style={styles.cardOverlay}>
                <Text style={styles.cardIcon}>🍽️</Text>
                <Text style={styles.cardTitle}>Gastronomia e Vida Noturna</Text>
                <Text style={styles.cardDesc}>
                  Saboreie a diversidade da capital. De pubs tradicionais a restaurantes premiados e
                  mercados de rua vibrantes. Encontre o lugar perfeito para sua próxima refeição, não
                  importa o seu gosto ou ocasião.
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  hero: {
    height: 320,
    justifyContent: 'flex-end',
  },
  heroImage: {
    resizeMode: 'cover',
  },
  heroOverlay: {
    backgroundColor: COLORS.overlayStrong,
    padding: SPACING.xl,
    paddingBottom: SPACING.xxl,
  },
  heroSubtitle: {
    color: COLORS.accent,
    fontSize: 12,
    letterSpacing: 4,
    fontWeight: '600',
    marginBottom: SPACING.xs,
  },
  heroTitle: {
    color: COLORS.text,
    fontSize: 36,
    fontWeight: '700',
    fontFamily: 'serif',
    lineHeight: 42,
  },
  heroCity: {
    color: COLORS.accent,
    fontSize: 42,
    fontWeight: '300',
    fontFamily: 'serif',
    fontStyle: 'italic',
  },
  content: {
    padding: SPACING.md,
    gap: SPACING.md,
  },
  sectionCard: {
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    marginBottom: SPACING.sm,
  },
  cardImage: {
    minHeight: 200,
    justifyContent: 'flex-end',
  },
  cardOverlay: {
    backgroundColor: COLORS.surface,
    padding: SPACING.md,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  cardIcon: {
    fontSize: 24,
    marginBottom: SPACING.xs,
  },
  cardTitle: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'serif',
    marginBottom: SPACING.sm,
  },
  cardDesc: {
    color: COLORS.textSecondary,
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
  },
});
