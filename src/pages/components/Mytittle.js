import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Mytittle = (props) => {
  return <Text style={styles.text}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#0029FF',
    fontSize: 20,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    fontWeight: 'bold',

  },
});

export default Mytittle;