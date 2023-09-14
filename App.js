import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [id, setID] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>9-Digit Employee ID</Text>
      <TextInput
        style={styles.input}
        onChangeText={(idEntered) => setID(idEntered)}
        // defaultValue='User Name'
        value={id}
      />
      <Text style={styles.inputLabel}>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(passwordEntered) => setPassword(passwordEntered)}
        // defaultValue='Password'
        value={password}
      />
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
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputLabel: {
    width: 300,
  },
});
