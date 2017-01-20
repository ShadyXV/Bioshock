import React, { Component } from 'react';
import{
  StyleSheet,
  Text,
  View,
  Navigator,    
} from 'react-native';
import {Details} from './Details';
import {Explore} from './Explore';





class MiddleLayer2 extends Component {
    renderScene(route,navigator){
        switch(route.id){
            case 'Data':
                return (<Explore navigator={navigator} title='Data'/>)
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


export {MiddleLayer2};
