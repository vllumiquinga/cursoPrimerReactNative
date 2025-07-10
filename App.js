import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import icon from './assets/icon.png';
import Logo from './lib/components/Logo';
import { Main } from './lib/components/Main';


export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Logo style={styles.logo}></Logo>
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
  species: {
    fontSize: 16,
    color: '#ffffff'
  },
  status: {
    fontSize: 16,
    color: '#33caff'
  },
  gender: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  logo:{
    backgroundColor:'#ff4433'
  }
});
