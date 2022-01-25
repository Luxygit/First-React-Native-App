import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

export default function ScreenB({route, navigation}) {
  // const {ItemName, ItemId} = route.params;
  const ItemName = route.params?.ItemName;
  const ItemId = route.params?.ItemId;

  const onPressHandler = () => {
    navigation.navigate('Screen_A', {Message: 'message From B'});
    // navigation.goBack();
    // navigation.setParams({ItemId: 14});
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({
          backgroundColor: pressed ? '#ddd' : '#0fff',
        })}>
        <Text style={styles.text}>Go to A</Text>
      </Pressable>
      <Text style={styles.text}>{ItemName}</Text>
      <Text style={styles.text}>Id :{ItemId}</Text>
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
