import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from './assets/style/allstyle'
import LoginScreen from './components/login_screen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen/>
   
    </View>
  );
}


