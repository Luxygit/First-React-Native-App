import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const CustomButton = props => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      style={({pressed}) => [
        {backgroundColor: pressed ? 'black' : 'white'},
        styles.button,
        {...props.style},
      ]}
      android_ripple={{color: 'red'}}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  button: {
    backgroundColor: 'yellow',
  },
});

export default CustomButton;
