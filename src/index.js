import React, {Component} from 'react';
import {StatusBar, Platform} from 'react-native';

import '~/config/ReactotronConfig';

import {Provider} from 'react-redux';
import {store} from './store';

import App from '~/App';

class Index extends Component {  


  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
        <App />
      </Provider>
    );
  }
}

export default Index;

