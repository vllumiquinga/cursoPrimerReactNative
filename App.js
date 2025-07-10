import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Pressable, Text, View, Image, ScrollView } from 'react-native';
import icon from './assets/icon.png';
import { getPersonajes } from './lib/rickyMortiy'
import Logo from './lib/components/Logo';

export default function App() {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    console.log("Obteniendo");
    getPersonajes().then((data) => {
      setPersonajes(data);
      console.log(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Logo style={styles.logo}></Logo>
      <ScrollView>
      {
        personajes.map((personaje) => (
          <View style={styles.card} key={personaje.id}>
            <Image source={{ uri: personaje.image }} style={styles.image} resizeMode='contain' />
            <Text style={styles.title}>{personaje.name}</Text>
            <Text style={styles.title}>{personaje.status}</Text>
            <Text style={styles.title}>{personaje.species}</Text>
          </View>
        )
        )
      }
      </ScrollView>
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
