import React from 'react';
import {Provider,useSelector,useDispatch} from 'react-redux';
import {StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/es/integration/react';
import {useNetInfo} from '@react-native-community/netinfo';
import createRouter from '~/routes';

import '~/config/ReactotronConfig';

import {store, persistor} from '~/store';

export default function App() {
  
  const dispatch = useDispatch();  
  // -Verifica se esta logado  
  const LogedIn = useSelector((state) => state.auth.isLoged);   
  // - Verifica conexão com internet
  const netInfo = useNetInfo();

  const Routes = createRouter(LogedIn, netInfo.isConnected);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
