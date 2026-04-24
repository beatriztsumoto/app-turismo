import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS } from '../constants/theme.js';

export default function DetalhesScreen({ route, navigation }) {
    // 1. TRAVA DE SEGURANÇA: Extração segura dos parâmetros usando o "?."
    // Adicionei o fallback para "pontoTuristico" caso você tenha usado o código anterior
    const item = route?.params?.item || route?.params?.pontoTuristico;
    const tipo = route?.params?.tipo;

    // 2. FALLBACK: Se der "refresh" na web ou o item não chegar, mostra essa tela em vez de quebrar o app
    if (!item) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={{ color: COLORS?.text || '#fff', fontSize: 18 }}>Nenhum dado encontrado!</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20, padding: 10 }}>
                    <Text style={{ color: COLORS?.accent || '#aaa', fontSize: 16 }}>← Voltar</Text>
                </TouchableOpacity>
            </View>
        );
    }

    // 3. RENDERIZAÇÃO NORMAL: O item existe com segurança
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Imagem grande */}
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item.imagem }} style={styles.heroImage} />
                    <View style={styles.imageOverlay} />
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Text style={styles.backText}>← Voltar</Text>
                    </TouchableOpacity>
                </View>

                {/* Conteúdo */}
                <View style={styles.content}>
                    {/* Badge tipo */}
                    <View style={styles.badgeRow}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>
                                {tipo === 'restaurante' ? '🍽️ Restaurante' : '🏛️ Ponto Turístico'}
                            </Text>
                        </View>
                    </View>

                    {/* Nome */}
                    <Text style={styles.title}>{item.nome}</Text>

                    {/* Divider */}
                    <View style={styles.divider} />

                    {/* Descrição completa */}
                    <Text style={styles.sectionLabel}>SOBRE O LOCAL</Text>
                    <Text style={styles.description}>
                        {item.descricaoCompleta || item.descricao}
                    </Text>

                    {/* Localização */}
                    <View style={styles.locationCard}>
                        <Text style={styles.locationIcon}>📍</Text>
                        <View style={styles.locationContent}>
                            <Text style={styles.locationLabel}>LOCALIZAÇÃO</Text>
                            <Text style={styles.locationText}>{item.localizacao}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

// Seus estilos foram mantidos exatamente como você criou!
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    imageContainer: {
        position: 'relative',
        height: 300,
    },
    heroImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    imageOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(15,22,40,0.35)',
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: SPACING.md,
        backgroundColor: 'rgba(15,22,40,0.7)',
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        borderRadius: BORDER_RADIUS.xl,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    backText: {
        color: COLORS.text,
        fontSize: 14,
        fontWeight: '600',
    },
    content: {
        padding: SPACING.lg,
    },
    badgeRow: {
        flexDirection: 'row',
        marginBottom: SPACING.sm,
    },
    badge: {
        backgroundColor: COLORS.primaryLight,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.xs,
        borderRadius: BORDER_RADIUS.xl,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    badgeText: {
        color: COLORS.accent,
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    title: {
        color: COLORS.text,
        fontSize: 30,
        fontWeight: '700',
        fontFamily: 'serif',
        lineHeight: 36,
        marginBottom: SPACING.md,
    },
    divider: {
        height: 1,
        backgroundColor: COLORS.border,
        marginBottom: SPACING.lg,
    },
    sectionLabel: {
        color: COLORS.accent,
        fontSize: 11,
        fontWeight: '700',
        letterSpacing: 3,
        marginBottom: SPACING.sm,
    },
    description: {
        color: COLORS.textSecondary,
        fontSize: 15,
        lineHeight: 24,
        marginBottom: SPACING.xl,
    },
    locationCard: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.lg,
        padding: SPACING.md,
        borderWidth: 1,
        borderColor: COLORS.border,
        gap: SPACING.sm,
    },
    locationIcon: {
        fontSize: 20,
        marginTop: 2,
    },
    locationContent: {
        flex: 1,
    },
    locationLabel: {
        color: COLORS.accent,
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 2,
        marginBottom: SPACING.xs,
    },
    locationText: {
        color: COLORS.text,
        fontSize: 14,
        lineHeight: 20,
    },
});
