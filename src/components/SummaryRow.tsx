import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { Spacing, FontSize, Radius } from '@/constants/theme';
import type { Music } from '@/types';

type CollectionSummaryProps = {
    items: Music[];
};

export default function CollectionSummary({ items }: CollectionSummaryProps) {
    const theme = useTheme();
    const totalItems = items.length;
    
    const avgRating = totalItems > 0 
        ? (items.reduce((sum, item) => sum + item.rating, 0) / totalItems).toFixed(1) 
        : '0.0';

    const uniqueArtists = items.reduce((acc, item) => {
        if (!acc.includes(item.artist)) {
            acc.push(item.artist);
        }
        return acc;
    }, [] as string[]).length;

    return (
        <View style={styles.row}>
            <View style={[styles.box, { backgroundColor: theme.card, borderColor: theme.border }]}>
                <Text style={[styles.number, { color: theme.text }]}>{totalItems}</Text>
                <Text style={[styles.label, { color: theme.muted }]}>Items</Text>
            </View>

            <View style={[styles.box, { backgroundColor: theme.card, borderColor: theme.border }]}>
                <Text style={[styles.number, { color: theme.text }]}>{avgRating}</Text>
                <Text style={[styles.label, { color: theme.muted }]}>Avg Rating</Text>
            </View>

            <View style={[styles.box, { backgroundColor: theme.card, borderColor: theme.border }]}>
                <Text style={[styles.number, { color: theme.text }]}>{uniqueArtists}</Text>
                <Text style={[styles.label, { color: theme.muted }]}>Artists</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        gap: Spacing.sm,
        marginHorizontal: Spacing.md,
        marginVertical: Spacing.sm,
    },
    box: {
        flex: 1,
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.xs,
        borderRadius: Radius.md,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        fontSize: FontSize.title,
        fontWeight: 'bold',
    },
    label: {
        fontSize: FontSize.small,
        marginTop: Spacing.xs / 2,
    },
});