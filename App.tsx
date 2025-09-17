import React, { useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import logoverde from "./logo-verde.png"
import logopreto from "./logo-preto.png"

export default function App() {
  const [visible, setVisible] = useState(true);
  const handleLogoView = () => {
    setVisible(prev => !prev);
  };
  return (
    <View style={styles.container} onTouchStart={handleLogoView}>
      {visible ? (<Image source={logoverde} style={styles.logoverde}  />) : (<Image source={logopreto} style={styles.logopreto} />)}
      <Text>Teste!</Text>
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
  logoverde: {
  },
  logopreto: {
  }
});

