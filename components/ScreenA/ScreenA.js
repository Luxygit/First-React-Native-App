import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

export default function ScreenA({navigation, route}) {
  const onPressHandler = () => {
    navigation.navigate('Screen_B', {ItemName: 'Item From A', ItemId: 12});
  };
  const Message = route.params?.Message;
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({
          backgroundColor: pressed ? '#ddd' : '#0fff',
        })}>
        <Text style={styles.text}>Go to Screen B</Text>
      </Pressable>
      <Text style={styles.text}>{Message}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});
