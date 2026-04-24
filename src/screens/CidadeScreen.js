import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
} from 'react-native';
import pontosTuristico from '../dados/lugares.json';
import { COLORS, SPACING, BORDER_RADIUS } from '../constants/theme.js';

function ItemCard({ item, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={() => onPress(item)} activeOpacity={0.88}>
            <ImageBackground
                source={{ uri: item.imagem }}
                style={styles.cardImage}
                imageStyle={styles.cardImageStyle}>
                <View style={styles.cardOverlay}>
                    <Text style={styles.cardName}>{item.nome}</Text>
                    <Text style={styles.cardDesc} numberOfLines={2}>
                        {item.descricao}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

export default function PontosTuristicosScreen({ navigation }) {
    const handlePress = (item) => {
        navigation.navigate('Detalhes', { item, tipo: 'ponto' });
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <FlatList
                data={pontosTuristicos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ItemCard item={item} onPress={handlePress} />}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    list: {
        padding: SPACING.sm,
        gap: SPACING.sm,
    },
    card: {
        borderRadius: BORDER_RADIUS.md,
        overflow: 'hidden',
        height: 120,
        marginBottom: SPACING.xs,
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
    },
    cardImage: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardImageStyle: {
        resizeMode: 'cover',
    },
    cardOverlay: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginLeft: '38%',
        backgroundColor: COLORS.surface,
        padding: SPACING.md,
        paddingLeft: SPACING.sm,
    },
    cardName: {
        color: COLORS.text,
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'serif',
        marginBottom: SPACING.xs,
        textDecorationLine: 'underline',
        textDecorationColor: COLORS.accent,
    },
    cardDesc: {
        color: COLORS.textSecondary,
        fontSize: 12,
        lineHeight: 18,
    },
});
