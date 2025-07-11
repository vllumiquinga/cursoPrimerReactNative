import { View, StyleSheet, Text } from "react-native-web";

export function EpisodeDetails({episode})
{
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.logo}>{episode.episode}</Text>
                <Text style={styles.logo}>{episode.id}</Text>
            </View>
            <Text style={styles.logo}>{episode.name}</Text>            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 95,
        borderRadius: 10,
        marginBottom: 20,
    },
    card: {
        backgroundcolor: '#3333',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        width: '90%',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000000'
    },
    status: {
        fontSize: 16,
        color: '#33caff'
    },
    logo: {
        backgroundColor: '#ff4433'
    }
});