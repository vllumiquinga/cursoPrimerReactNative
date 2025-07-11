import { StatusBar } from 'expo-status-bar';
import Logo from '../lib/components/Logo';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Main } from '../lib/components/Main';
import { Link } from 'expo-router';


export default function Index() {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Logo style={styles.logo}></Logo>
            <Link href="/about" asChild>
                <TouchableOpacity style={styles.logo} >
                    <Text style={styles.logo}>Acerca de</Text>
                </TouchableOpacity>
            </Link>
            <Main />
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
    logo: {
        backgroundColor: '#7a7373ff'
    }
});
