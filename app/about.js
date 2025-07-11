import { Link } from "expo-router";
import { ScrollView, View, Text, StyleSheet } from "react-native-web";

export default function About() {
    return(<ScrollView
    contentContainerStyle={styles.container} > 
        <View>
            <Text>Hola Mundo</Text>
            <Link href="/">
                <Text>Volver al inicio</Text>
            </Link>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        backgroundColor: '#7a7373ff'
    }
});