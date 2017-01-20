
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Navigator
} from 'react-native';
import {MainTabs} from './app/components/Main';
import {Details} from './app/components/Details';
import {Explore} from './app/components/Explore';

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';



export default class AwesomeProject extends Component {
 
  renderScene(route,navigator){
        switch(route.id){
            case 'Data':
                return (<MainTabs navigator={navigator} route={route} title='Data'/>)
            case 'Detail':
                return (<Details navigator={navigator} title='Detail'/>)
        }
  }

  render() {
      const routes = [
    {id: 'Data', index: 0},
    {id: 'Detail', index: 1},
  ];
    return (  
                <Navigator
                    initialRoute={routes[0]}
                    renderScene={this.renderScene}
          />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:0,
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  container2: {
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
  tabs: {
    marginTop:60
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
//  switch(route.id){
//             case 'Data':
//                 return (<MainTabs navigator={navigator} title='Data'/>)
//             case 'Detail':
//                 return (<Details navigator={navigator} title='Detail'/>)
//         }