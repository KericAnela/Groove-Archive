import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { Music } from '@/types';

type MusicDetailsProps = {
    music: Music;
};

export default function MusicDetails({ music }: MusicDetailsProps) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {music.image ? (
                <Image source={{ uri: music.image }} style={styles.image} />
            ) : (
                <View style={[styles.image, styles.placeholderContainer]}>
                    <Text style={styles.placeholderText}>No Image Available</Text>
                </View>
            )}

            <View style={styles.contentContainer}>
                <Text style={styles.title}>{music.title}</Text>
                <Text style={styles.artist}>{music.artist}</Text>

                <View style={styles.badgeRow}>
                    <Text style={styles.formatBadge}>{music.format.toUpperCase()}</Text>
                    <Text style={styles.year}>Released: {music.releaseYear}</Text>
                </View>

                <View style={styles.metaCard}>
                    <View style={styles.metaItem}>
                        <Text style={styles.metaLabel}>Rating</Text>
                        <Text style={styles.metaValue}>{music.rating} ⭐</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.metaItem}>
                        <Text style={styles.metaLabel}>Condition</Text>
                        <Text style={styles.metaValue}>{music.condition} / 10</Text>
                    </View>
                </View>

                {music.notes && (
                    <View style={styles.notesContainer}>
                        <Text style={styles.notesTitle}>Notes</Text>
                        <Text style={styles.notesText}>{music.notes}</Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8FAFC',
        flexGrow: 1,
        paddingBottom: 24,
    },
    image: {
        width: '100%',
        height: 350,
        resizeMode: 'cover',
    },
    placeholderContainer: {
        backgroundColor: '#CBD5E1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        fontSize: 16,
        color: '#475569',
        fontWeight: '600',
    },
    contentContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 4,
    },
    artist: {
        fontSize: 18,
        color: '#475569',
        marginBottom: 12,
    },
    badgeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    formatBadge: {
        fontSize: 12,
        fontWeight: 'bold',
        backgroundColor: '#3B82F6',
        color: '#FFFFFF',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
        overflow: 'hidden',
    },
    year: {
        fontSize: 14,
        color: '#64748B',
    },
    metaCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'space-around',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 20,
    },
    metaItem: {
        alignItems: 'center',
    },
    metaLabel: {
        fontSize: 12,
        color: '#64748B',
        marginBottom: 4,
    },
    metaValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1E293B',
    },
    separator: {
        width: 1,
        height: '80%',
        backgroundColor: '#E2E8F0',
    },
    notesContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    notesTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 6,
    },
    notesText: {
        fontSize: 14,
        color: '#475569',
        lineHeight: 20,
    },
});