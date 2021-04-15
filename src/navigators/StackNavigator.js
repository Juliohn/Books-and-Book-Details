
import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import BooksListScreen from '~/pages/Books/List'
import BookDetailsScreen from '~/pages/Books/Details'

import { createStackNavigator } from 'react-navigation-stack';


export default () => {
  var Menu = {};
  var BooksList = {
    screen: BooksListScreen,
  };
  Menu.Home = BooksList;


  var BookDetails = {
    screen: BookDetailsScreen,
    navigationOptions: ({navigation}) => ({
      headerLeft:null,
    }),
  };
  Menu.BookDetails = BookDetails;

  // - Menu
  return createStackNavigator(Menu, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#E5E5E5',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        borderBottomWidth: 0,
        marginBottom:10
      },
    }
  }
  );
};
