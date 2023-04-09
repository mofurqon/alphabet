import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/Homescreen'; 
import Alphabetscreen from './src/screens/Alphabetscreen';
import ModalDetail from './src/screens/ModalDetail';
import NumberScreen from './src/screens/NumberScreen';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackScreen = () => {
  return (
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="Alphabet" component={Alphabetscreen} />
        <MainStack.Screen name="Number" component={NumberScreen} />
      </MainStack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={MainStackScreen}/>
        <RootStack.Screen name="ModalDetail" component={ModalDetail}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;