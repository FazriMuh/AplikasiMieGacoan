import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Mybutton2 = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.customClick}>
      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#373057',
    padding: 10,
    marginTop: 15,
    marginLeft: 35,
    marginRight: 35,
    borderRadius:10,
    width: "30%",
    
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Mybutton2;