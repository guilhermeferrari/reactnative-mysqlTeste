import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {styles} from './styles';
import ReduxThunk from 'redux-thunk';
import Routes from './src/Routes';
import { Provider } from 'react-redux';
import reducers from './src/reducers/index';
import { createStore, applyMiddleware } from 'redux';

export default class App extends Component {

  render() {
		console.disableYellowBox = true;
		return (
				<Routes />
		);
	}
}
