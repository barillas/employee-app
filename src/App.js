import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    var config = {
    apiKey: 'AIzaSyCkxPRCboVlk-FQcWAHAlNhYElOXlEXgUA',
    authDomain: 'manager-45457.firebaseapp.com',
    databaseURL: 'https://manager-45457.firebaseio.com',
    storageBucket: 'manager-45457.appspot.com',
    messagingSenderId: '872799032531'
  };
  firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
