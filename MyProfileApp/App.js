import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require('./assets/fotosaja.png')}
      />
      <Text style={styles.name}>Mochammad Haris Febrian</Text>
      <Text style={styles.bio}>IT OPERATOR BRIIT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
