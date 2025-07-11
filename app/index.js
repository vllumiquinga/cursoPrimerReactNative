import { StatusBar } from 'expo-status-bar';
import Logo  from '../lib/components/Logo';
import { StyleSheet, View } from 'react-native';
import { Main } from '../lib/components/Main';


export default function Index(){
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
  logo:{
    backgroundColor:'#7a7373ff'
  }
});
