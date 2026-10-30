import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { Music } from '@/types';

type MusicCardProps = {
    music: Music;
};

export default function MusicCard({ music }: MusicCardProps) {
    return (
        <Pressable
            onPress={() => console.log('Open', music.title)}
            style={({ pressed }) => [styles.card, pressed && styles.pressed]}
        >

            {music.image ? (
                <Image source={{ uri: music.image }} style={styles.image} />
            ) : (
                <View style={[styles.image, styles.placeholderContainer]}>
                    <Text style={styles.placeholderText}>No Image</Text>
                </View>
            )}

            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={1}>{music.title}</Text>
                <Text style={styles.artist} numberOfLines={1}>{music.artist}</Text>

                <View style={styles.row}>
                    <Text style={styles.formatBadge}>{music.format.toUpperCase()}</Text>
                    <Text style={styles.year}>{music.releaseYear}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.metaText}>Rating: {music.rating} stars</Text>
                    <Text style={styles.metaText}>Condition: {music.condition}/10</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: { 
        borderRadius: 12, 
        overflow: 'hidden', 
        backgroundColor: '#E6EEF7',
        flexDirection: 'row',
        marginVertical: 6,
        alignItems: 'center',
    },
    pressed: { opacity: 0.6 },
    image: {
        width: 90,
        height: 90,
    },
    placeholderContainer: {
        backgroundColor: '#CBD5E1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        fontSize: 11,
        color: '#475569',
        fontWeight: '600',
    },
    infoContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1E293B',
    },
    artist: {
        fontSize: 14,
        color: '#475569',
        marginBottom: 6,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 2,
    },
    formatBadge: {
        fontSize: 10,
        fontWeight: 'bold',
        backgroundColor: '#3B82F6',
        color: '#FFFFFF',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        overflow: 'hidden',
    },
    year: {
        fontSize: 12,
        color: '#64748B',
    },
    metaText: {
        fontSize: 12,
        color: '#475569',
    },
});