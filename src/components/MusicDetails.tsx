import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { Music } from '@/types';
import { useTheme } from '@/hooks/use-theme';
import { Spacing, FontSize, Radius } from '@/constants/theme';

type MusicDetailsProps = {
    music: Music;
};

export default function MusicDetails({ music }: MusicDetailsProps) {
    const theme = useTheme();

    return (
        <ScrollView 
            contentContainerStyle={[styles.container, { backgroundColor: theme.background }]}
        >
            <View style={[styles.centeredWrapper, { backgroundColor: theme.background }]}>
                {/* 16:9 Photo Header */}
                {music.image ? (
                    <Image source={{ uri: music.image }} style={styles.image} />
                ) : (
                    <View style={[styles.image, styles.placeholderContainer, { backgroundColor: theme.border }]}>
                        <Text style={[styles.placeholderText, { color: theme.muted }]}>No Image Available</Text>
                    </View>
                )}

                <View style={[styles.contentContainer, { backgroundColor: theme.card, borderColor: theme.border }]}>
                    <Text style={[styles.title, { color: theme.text }]}>{music.title}</Text>
                    <Text style={[styles.artist, { color: theme.muted }]}>{music.artist}</Text>

                    <View style={styles.badgeRow}>
                        <Text style={[styles.formatBadge, { backgroundColor: theme.primary, color: theme.onPrimary }]}>
                            {music.format.toUpperCase()}
                        </Text>
                        <Text style={[styles.year, { color: theme.muted }]}>Released: {music.releaseYear}</Text>
                    </View>

                    <View style={[styles.metaCard, { backgroundColor: theme.background, borderColor: theme.border }]}>
                        <View style={styles.metaRow}>
                            <Text style={[styles.metaLabel, { color: theme.muted }]}>Rating</Text>
                            <Text style={[styles.metaValue, { color: theme.text }]} numberOfLines={1}>{music.rating} stars</Text>
                        </View>
                        <View style={[styles.separator, { backgroundColor: theme.border }]} />
                        <View style={styles.metaRow}>
                            <Text style={[styles.metaLabel, { color: theme.muted }]}>Condition</Text>
                            <Text style={[styles.metaValue, { color: theme.text }]} numberOfLines={1}>{music.condition} / 10</Text>
                        </View>
                    </View>

                    {music.notes && (
                        <View style={[styles.notesContainer, { backgroundColor: theme.background, borderColor: theme.border }]}>
                            <Text style={[styles.notesTitle, { color: theme.text }]}>Notes</Text>
                            <Text style={[styles.notesText, { color: theme.muted }]}>{music.notes}</Text>
                        </View>
                    )}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    centeredWrapper: {
        width: '100%',
        maxWidth: 600,
        alignSelf: 'center',
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        resizeMode: 'cover',
    },
    placeholderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        fontSize: FontSize.body,
        fontWeight: '600',
    },
    contentContainer: {
        padding: Spacing.lg,
        margin: Spacing.md,
        borderRadius: Radius.md,
        borderWidth: 1,
    },
    title: {
        fontSize: FontSize.hero,
        fontWeight: 'bold',
        marginBottom: Spacing.xs,
    },
    artist: {
        fontSize: FontSize.title,
        marginBottom: Spacing.md,
    },
    badgeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: Spacing.lg,
    },
    formatBadge: {
        fontSize: FontSize.small,
        fontWeight: 'bold',
        paddingHorizontal: Spacing.sm,
        paddingVertical: Spacing.xs / 2,
        borderRadius: Radius.pill,
        overflow: 'hidden',
    },
    year: {
        fontSize: FontSize.small,
    },
    metaCard: {
        borderRadius: Radius.sm,
        borderWidth: 1,
        padding: Spacing.md,
        marginBottom: Spacing.md,
        gap: Spacing.md,
    },
    metaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    metaLabel: {
        fontSize: FontSize.body,
    },
    metaValue: {
        fontSize: FontSize.body,
        fontWeight: 'bold',
        flexShrink: 1,
        textAlign: 'right',
    },
    separator: {
        height: 1,
        width: '100%',
    },
    notesContainer: {
        borderRadius: Radius.sm,
        borderWidth: 1,
        padding: Spacing.md,
    },
    notesTitle: {
        fontSize: FontSize.body,
        fontWeight: 'bold',
        marginBottom: Spacing.xs,
    },
    notesText: {
        fontSize: FontSize.body,
        lineHeight: 22,
    },
});