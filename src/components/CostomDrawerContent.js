import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { COLORS, SPACING, BORDER_RADIUS } from '../constants/theme.js';

const menuItems = [
    { name: 'Início', icon: '🏠', screen: 'HomeTab' },
    { name: 'Sobre', icon: 'ℹ️', screen: 'Sobre' },
    { name: 'Contato', icon: '📬', screen: 'Contato' },
];

export default function CustomDrawerContent(props) {
    const { state, navigation } = props;
    const activeRoute = state.routes[state.index]?.name;

    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={styles.container}
            style={styles.scroll}>
            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400',
                    }}
                    style={styles.headerImage}
                />
                <View style={styles.headerOverlay}>
                    <Text style={styles.appName}>Guia Turístico</Text>
                    <Text style={styles.appCity}>Londres 🇬🇧</Text>
                </View>
            </View>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Menu items */}
            <View style={styles.menu}>
                {menuItems.map((item) => {
                    const isActive = activeRoute === item.screen;
                    return (
                        <TouchableOpacity
                            key={item.screen}
                            style={[styles.menuItem, isActive && styles.menuItemActive]}
                            onPress={() => navigation.navigate(item.screen)}
                            activeOpacity={0.8}>
                            <Text style={styles.menuIcon}>{item.icon}</Text>
                            <Text style={[styles.menuLabel, isActive && styles.menuLabelActive]}>
                                {item.name}
                            </Text>
                            {isActive && <View style={styles.activeIndicator} />}
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>v1.0.0 · Guia Turístico Digital</Text>
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: COLORS.background,
    },
    container: {
        flex: 1,
        paddingTop: 0,
    },
    header: {
        height: 180,
        position: 'relative',
    },
    headerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    headerOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(15,22,40,0.7)',
        justifyContent: 'flex-end',
        padding: SPACING.md,
    },
    appName: {
        color: COLORS.text,
        fontSize: 22,
        fontWeight: '700',
        fontFamily: 'serif',
    },
    appCity: {
        color: COLORS.accent,
        fontSize: 14,
        fontWeight: '500',
        marginTop: 2,
    },
    divider: {
        height: 1,
        backgroundColor: COLORS.border,
        marginHorizontal: SPACING.md,
        marginVertical: SPACING.sm,
    },
    menu: {
        paddingHorizontal: SPACING.sm,
        paddingVertical: SPACING.sm,
        gap: SPACING.xs,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SPACING.sm + 2,
        paddingHorizontal: SPACING.md,
        borderRadius: BORDER_RADIUS.md,
        gap: SPACING.md,
        position: 'relative',
    },
    menuItemActive: {
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    menuIcon: {
        fontSize: 20,
        width: 28,
        textAlign: 'center',
    },
    menuLabel: {
        color: COLORS.textSecondary,
        fontSize: 15,
        fontWeight: '500',
        flex: 1,
    },
    menuLabelActive: {
        color: COLORS.text,
        fontWeight: '700',
    },
    activeIndicator: {
        width: 4,
        height: 20,
        backgroundColor: COLORS.accent,
        borderRadius: 2,
    },
    footer: {
        padding: SPACING.lg,
        marginTop: 'auto',
    },
    footerText: {
        color: COLORS.textMuted,
        fontSize: 11,
        textAlign: 'center',
        letterSpacing: 0.5,
    },
});
