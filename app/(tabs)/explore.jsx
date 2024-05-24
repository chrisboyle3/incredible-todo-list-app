import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ExploreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Page</Text>      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
  },
});

export default ExploreScreen;