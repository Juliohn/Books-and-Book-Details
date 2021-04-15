import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import StackNavigator from '~/navigators/StackNavigator';
import SwitchNavigator from '~/navigators/SwitchNavigator';
import OffLine from '~/components/OffLine';

export default (LogedIn = true, OnLine = true) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: SwitchNavigator,
        App: StackNavigator(),
        OffLine: OffLine,
      },
      {
        initialRouteName: OnLine ? (LogedIn ? 'App' : 'Sign') : 'OffLine',
      },
    ),
  );
