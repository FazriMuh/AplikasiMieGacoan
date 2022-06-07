import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

const MyImageButton = (props) => {

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: props.btnColor }]}
      onPress={props.customClick}>

      <Icon style={styles.icon}
        name={props.btnIcon} size={30} color='white' />

      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    color: '#ffffff',
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 5,
    marginBottom:10,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 16,
  }
});

export default MyImageButton;