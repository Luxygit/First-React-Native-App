import {TestScheduler} from 'jest';
import React, {useState} from 'react';

import {
  Image,
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
  TextInput,
  TouchableOpacity,
  Pressable,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import CustomButton from './components/CustomButton/CustomButton';
import Header from './components/Header/Header';

const App = () => {
  const [name, setName] = useState('Diego');
  const [session, setSession] = useState({number: 7, title: 'state'});
  const [current, setCurrent] = useState(true);
  const [counter, setCounter] = useState(0);
  const [items, setItems] = useState([
    {key: '1', name: 'item1'},
    {key: '2', name: 'item2'},
    {key: '3', name: 'item3'},
    {key: '4', name: 'item4'},
    {key: '5', name: 'item6'},
  ]);
  const [dataState, setDataState] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1', 'Item 3-2'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ]);

  const [refreshing, setRefreshing] = useState(false);
  // const onRefresh = () => {
  //   setRefreshing(true);
  //   setItems([...items, {key: 69, name: 'item69'}]);
  //   setRefreshing(false);
  // };
  const onRefreshSection = () => {
    setRefreshing(true);
    const addOne = dataState.length + 1;
    setDataState([
      ...dataState,
      {
        title: 'Title ' + addOne,
        data: [`Item ${addOne}-1`, `Item ${addOne}-2`],
      },
    ]);

    setRefreshing(false);
  };
  const onPressHandler = () => {
    if (nameInput == undefined || nameInput.length > 2) {
      setSubmitted(!submitted);
    } else {
      Alert.alert(
        'Warning',
        'Name too short',
        [{text: 'ok', onPress: () => console.warn('ok pressed')}],
        {cancelable: true, onDismiss: () => console.warn('alert dismissed')},
      );
    }
  };
  // const onClickHandler = () => {
  //   setName('Luxy');
  //   setSession({number: 8, title: 'style'});
  //   setCurrent(false);
  //   setCounter(counter + 5);
  // };
  const [nameInput, setNameInput] = useState();
  const [submitted, setSubmitted] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ImageBackground
        source={require('./assets/error.jpg')}
        style={styles.body}>
        <Header title={'Home'} />
        <Text style={styles.text}>Write Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={value => setNameInput(value)}></TextInput>
        {/* buttons */}
        {/* <CustomButton
          onPressFunction={onPressHandler}
          title={submitted ? 'Clear' : 'Submit'}
        /> */}
        <CustomButton
          onPressFunction={onPressHandler}
          title={submitted ? 'Clear' : 'Submit'}
          style={{
            margin: 20,
            width: 100,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        {/* <Pressable
        onPress={onPressHandler}
        style={({pressed}) => [{backgroundColor: pressed ? 'black' : 'white'}]}
        android_ripple={{color: 'red'}}>
        <Text>{submitted ? 'Clear' : 'Submit'}</Text>
      </Pressable> */}
        {/* output */}
        {submitted ? (
          <View style={styles.body}>
            <Text style={styles.text}>Name set as: {nameInput}</Text>
            <Image
              style={styles.image}
              source={require('./assets/error.jpg')}
              resizeMode="stretch"
            />
          </View>
        ) : (
          <Image
            style={styles.image}
            source={require('./assets/error.jpg')}
            resizeMode="stretch"
            blurRadius={30}
          />
        )}
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // width: '100%',
    // height: '50%',
    alignItems: 'center',
    // justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 10,
    borderRadius: 20,
    padding: 10,
  },

  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  view1: {
    flex: 2,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  view2: {
    flex: 2,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  view3: {
    flex: 4,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  text: {
    color: 'yellow',
    fontSize: 25,
    fontWeight: '900',
    fontStyle: 'italic',
    textTransform: 'uppercase',
  },
  list: {
    color: '#000000',
    fontSize: 90,
    fontStyle: 'italic',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  button: {
    width: 250,
    height: 60,
  },
  touchableButton: {
    backgroundColor: 'red',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  input: {
    width: 250,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    textAlign: 'center',
    color: 'white',
  },
});

export default App;
