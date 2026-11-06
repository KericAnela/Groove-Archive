import { ScrollView, View, StyleSheet, useWindowDimensions } from 'react-native';
import { Stack } from 'expo-router';
import MusicCard from '@/components/MusicCard';
import CollectionSummary from '@/components/SummaryRow';
import { musicList } from '@/data/music_list';
import { Spacing } from '@/constants/theme';

export default function HomeScreen() {
    const { width } = useWindowDimensions();
    
    const columns = width >= 900 ? 3 : width >= 600 ? 2 : 1;
    
    const cardWidth = (width - 2 * Spacing.md - (columns - 1) * Spacing.md) / columns;

    return (
        <>
            <Stack.Screen options={{ title: 'Groove Archive' }} />
            
            <ScrollView contentContainerStyle={styles.container}>
                <CollectionSummary items={musicList} />
                
                <View style={[styles.grid, { gap: Spacing.md }]}>
                    {musicList.map((item, index) => (
                        <MusicCard 
                            key={index} 
                            music={item} 
                            style={{ width: cardWidth }} 
                        />
                    ))}
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: Spacing.sm,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: Spacing.md,
        marginTop: Spacing.sm,
    },
});