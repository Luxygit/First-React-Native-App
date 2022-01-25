import {TestScheduler} from 'jest';
import React, {useState} from 'react';

import {
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
} from 'react-native';

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
    if (nameInput.length > 2) {
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
    <View style={styles.body}>
      <Text style={styles.text}>Write Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={value => setNameInput(value)}></TextInput>
      <Button title={submitted ? 'Clear' : 'Submit'} onPress={onPressHandler} />
      {submitted ? (
        <Text style={styles.text}>Name set as: {nameInput}</Text>
      ) : null}
      {/* touchables */}
      <TouchableOpacity onPress={onPressHandler} style={styles.touchableButton}>
        <Text>{submitted ? 'Clear' : 'Submit'}</Text>
      </TouchableOpacity>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => [{backgroundColor: pressed ? 'black' : 'white'}]}
        android_ripple={{color: 'red'}}>
        <Text>{submitted ? 'Clear' : 'Submit'}</Text>
      </Pressable>
    </View>

    // <SectionList
    //   keyExctractor={(item, index) => index.toString()}
    //   sections={dataState}
    //   renderItem={({item}) => <Text style={styles.list}>{item}</Text>}
    //   renderSectionHeader={({section}) => (
    //     <View style={styles.view1}>
    //       <Text style={styles.list}>{section.title}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl refreshing={refreshing} onRefresh={onRefreshSection} />
    //   }></SectionList>

    // View and ScrollView example
    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       colors={['blue']}
    //     />
    //   }>
    //   <View style={styles.view1}>
    //     <Text style={styles.text}> {name}'s' App</Text>
    //     <Text style={styles.text}>
    //       Session {session.number} about {session.title}
    //     </Text>
    //     <Text style={styles.text}>
    //       {current ? 'current session' : 'next session'}
    //     </Text>
    //     <Text style={styles.text}>{counter}</Text>
    //   </View>
    //   <View style={styles.view2}>
    //     <Text style={styles.text}> Second View Element</Text>
    //   </View>
    //   <View style={styles.view3}>
    //     {items.map(object => {
    //       return (
    //         <Text style={styles.list} key={object.key}>
    //           {object.item}
    //         </Text>
    //       );
    //     })}
    //   </View>
    //   <View style={styles.button}>
    //     <Button title="Update Name" onPress={onClickHandler}></Button>
    //   </View>
    // </ScrollView>

    // FLatList example

    // <FlatList
    //   data={items}
    //   // horizontal
    //   // keyExtractor={(item, index) => index.toString()}
    //   renderItem={({item}) => (
    //     <View style={styles.view1}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       colors={['blue']}
    //     />
    //   }></FlatList>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // width: '100%',
    // height: '50%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 10,
    borderRadius: 20,
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
    color: '#000000',
    fontSize: 25,
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
  },
});

export default App;
