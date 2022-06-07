import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

const MyImageButton = (props) => {

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: props.btnColor }]}
      onPress={props.customClick}>

      <Icon style={styles.icon}
        name={props.btnIcon} size={20} color='white' />

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
    padding: 15,
    marginTop: 54,
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 5,
  },
  text: { 
    marginTop: -15,
    color: '#ffffff',
    fontSize:24,
    fontWeight:"bold",
  },
  icon: {
    paddingBottom: 5,
  }
});

export default MyImageButton;