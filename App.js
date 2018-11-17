import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import * as firebase from 'firebase';
import rootReducer from './App/Reducers/RootReducer';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import AuthLoadingScreen from "./App/Screens/AuthLoadingScreen";
import HomeScreen from "./App/Screens/HomeScreen";
import OtherScreen from "./App/Screens/OtherScreen";
import LoginScreen from "./App/Screens/LoginScreen";
import SignUpScreen from "./App/Screens/SignUpScreen";

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen});
const AuthStack = createStackNavigator({
    Login: LoginScreen,
    SignUp: SignUpScreen
});

const AppNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

// https://reactnavigation.org/docs/en/app-containers.html
const AppContainer = createAppContainer(AppNavigator);


// Initialize Firebase
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};
firebase.initializeApp(firebaseConfig);


class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>

      //<View style={styles.container}>
      //  <Text>Open up App.js to start working on your app!</Text>
      //</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;