import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import { writeDailySpecial } from './firebase'
AppRegistry.registerComponent('main',() => App);


export default function App() {
  writeDailySpecial();
  return (
    <View style={styles.container}>
      <Text>Welcome to my motherfucking app</Text>
      <StatusBar style="auto" />
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
});

