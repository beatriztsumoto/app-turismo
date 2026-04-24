import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS } from '../constants/theme.js';

export default function SobreScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Image
                source={{
                    uri: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
                }}
                style={styles.image}
            />
            <View style={styles.body}>
                <Text style={styles.label}>SOBRE O APP</Text>
                <Text style={styles.title}>Guia Turístico Digital</Text>
                <View style={styles.divider} />
                <Text style={styles.text}>
                    O Guia Turístico Digital foi desenvolvido para ajudar visitantes a explorar os
                    melhores destinos, monumentos, museus e restaurantes de Londres.
                </Text>
                <Text style={styles.text}>
                    Nosso objetivo é tornar a experiência turística mais rica, organizada e
                    acessível, reunindo informações confiáveis e atualizadas em um único aplicativo.
                </Text>

                <View style={styles.infoCard}>
                    <Text style={styles.infoTitle}>📱 Versão</Text>
                    <Text style={styles.infoValue}>1.0.0</Text>
                </View>
                <View style={styles.infoCard}>
                    <Text style={styles.infoTitle}>🛠️ Tecnologias</Text>
                    <Text style={styles.infoValue}>React Native · Expo · React Navigation</Text>
                </View>
                <View style={styles.infoCard}>
                    <Text style={styles.infoTitle}>🎨 Design</Text>
                    <Text style={styles.infoValue}>Figma · React Native Paper</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    content: {
        paddingBottom: SPACING.xxl,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    body: {
        padding: SPACING.lg,
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
    text: {
        color: COLORS.textSecondary,
        fontSize: 15,
        lineHeight: 24,
        marginBottom: SPACING.md,
    },
    infoCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.md,
        padding: SPACING.md,
        borderWidth: 1,
        borderColor: COLORS.border,
        marginBottom: SPACING.sm,
    },
    infoTitle: {
        color: COLORS.text,
        fontSize: 14,
        fontWeight: '600',
    },
    infoValue: {
        color: COLORS.textSecondary,
        fontSize: 13,
        flex: 1,
        textAlign: 'right',
        marginLeft: SPACING.sm,
    },
});
