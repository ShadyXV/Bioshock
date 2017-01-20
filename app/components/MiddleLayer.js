import React, { Component } from 'react';
import{
  StyleSheet,
  Text,
  View,
  Navigator,    
} from 'react-native';
import {Details} from './Details';
import {AppData} from './AppData';




class MiddleLayer extends Component {
    renderScene(route,navigator){
        switch(route.id){
            case 'Data':
                return (<AppData navigator={navigator} title='Data'/>)
            case 'Detail':
                return (<Details navigator={navigator} title='Detail'/>)
        }
    }
    render(){
        return(
            <Navigator
            initialRoute={{id:'Data'}}
            renderScene={this.renderScene}
            configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
            />
        );
    }
}


export {MiddleLayer};
