/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Text,
    View
} from 'react-native';
import Boy from './Boy';

export default class imoocDemo extends Component {
    render() {
        return (
            <Navigator
              initialRoute={{
                  component:Boy
              }}

              renderScene={(route,navigator) => {
                  let Component = route.component;
                  return <Component navigator={navigator} {...route.params}/>
              }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('imoocDemo', () => imoocDemo);
