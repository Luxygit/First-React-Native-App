// import {TestScheduler} from 'jest';
import React from 'react';

import ScreenA from './components/ScreenA/ScreenA';
import ScreenB from './components/ScreenB/ScreenB';

import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// import CustomButton from './components/CustomButton/CustomButton';
// import Header from './components/Header/Header';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Screen_A" component={ScreenA} />
        <Stack.Screen name="Screen_B" component={ScreenB} />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen
          name="Screen_A"
          component={ScreenA}
          // options={{tabBarBadge: 1}}
        />
        <Tab.Screen name="Screen_B" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
