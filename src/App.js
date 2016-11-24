import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyCkxPRCboVlk-FQcWAHAlNhYElOXlEXgUA',
    authDomain: 'manager-45457.firebaseapp.com',
    databaseURL: 'https://manager-45457.firebaseio.com',
    storageBucket: 'manager-45457.appspot.com',
    messagingSenderId: '872799032531'
  };
  firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <LoginForm />
      </Provider>
    );
  }
}

export default App;
