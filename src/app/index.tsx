import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import MusicCard from '@/components/MusicCard';
import { musicList } from '@/data/music_list';

export default function HomeScreen() {
    const totalItems = musicList.length;

    return (
        <>
            <Stack.Screen options={{ title: 'Groove Archive' }} />

            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Archived Items</Text>
                    <Text style={styles.badge}>{totalItems} {totalItems === 1 ? 'item' : 'items'}</Text>
                </View>

                {musicList.map((item, index) => (
                    <MusicCard key={index} music={item} />
                ))}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#F8FAFC',
        flexGrow: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1E293B',
    },
    badge: {
        fontSize: 14,
        fontWeight: '600',
        color: '#FFFFFF',
        backgroundColor: '#3B82F6',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        overflow: 'hidden',
    },
});