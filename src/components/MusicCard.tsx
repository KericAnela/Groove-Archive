import { Image, Pressable, StyleSheet, Text, View, StyleProp, ViewStyle } from 'react-native';
import type { Music } from '@/types';
import { useTheme } from '@/hooks/use-theme';
import { Spacing, FontSize, Radius } from '@/constants/theme';

type MusicCardProps = {
    music: Music;
    style?: StyleProp<ViewStyle>;
};

export default function MusicCard({ music, style }: MusicCardProps) {
    const theme = useTheme();

    return (
        <Pressable
            onPress={() => console.log('Open', music.title)}
            style={({ pressed }) => [
                styles.card,
                { backgroundColor: theme.card, borderColor: theme.border },
                pressed && styles.pressed,
                style,
            ]}
        >
            <View style={styles.imageContainer}>
                {music.image ? (
                    <Image source={{ uri: music.image }} style={styles.photo} />
                ) : (
                    <View style={[styles.photo, styles.placeholderContainer, { backgroundColor: theme.border }]}>
                        <Text style={[styles.placeholderText, { color: theme.muted }]}>No Image</Text>
                    </View>
                )}
                <Text style={[styles.badge, { backgroundColor: theme.primary, color: theme.onPrimary }]}>
                    {music.format.toUpperCase()}
                </Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={[styles.title, { color: theme.text }]} numberOfLines={1}>
                    {music.title}
                </Text>
                <Text style={[styles.artist, { color: theme.muted }]} numberOfLines={1}>
                    {music.artist}
                </Text>

                <View style={styles.row}>
                    <Text style={[styles.year, { color: theme.muted }]}>{music.releaseYear}</Text>
                    <Text style={[styles.metaText, { color: theme.muted }]}>Rating: {music.rating} ★</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: { 
        borderRadius: Radius.md, 
        borderWidth: 1,
        overflow: 'hidden', 
    },
    pressed: { 
        opacity: 0.6 
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
    },
    photo: {
        width: '100%',
        aspectRatio: 16 / 9,
    },
    placeholderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        fontSize: FontSize.small,
        fontWeight: '600',
    },
    badge: {
        position: 'absolute',
        top: Spacing.sm,
        right: Spacing.sm,
        paddingHorizontal: Spacing.sm,
        paddingVertical: Spacing.xs / 2,
        borderRadius: Radius.pill,
        fontSize: FontSize.small,
        fontWeight: 'bold',
        overflow: 'hidden',
    },
    infoContainer: {
        padding: Spacing.md,
        gap: Spacing.xs,
    },
    title: {
        fontSize: FontSize.title,
        fontWeight: 'bold',
    },
    artist: {
        fontSize: FontSize.body,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Spacing.xs,
    },
    year: {
        fontSize: FontSize.small,
    },
    metaText: {
        fontSize: FontSize.small,
    },
});