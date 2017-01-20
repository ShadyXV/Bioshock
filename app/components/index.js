
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import {Setings} from './app/components/Settings';
import {Explore} from './app/components/Explore';
import {MiddleLayer} from './app/components/MiddleLayer';
import {Details} from './app/components/Details';
import {AppData} from './app/components/AppData';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';



export default class AwesomeProject extends Component {
  render() {
    return (  
     <ScrollableTabView
      style={styles.container}
      renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
      tabBarPosition='overlayTop'
    >
      <ScrollView tabLabel='explore' style={styles.tabs}>
        <Explore/>
      </ScrollView>
      <ScrollView tabLabel='Bioshock' style={styles.tabs}>
        <MiddleLayer/>
      </ScrollView>
       <ScrollView tabLabel='settings' style={styles.tabs}>
        <Setings/>
      </ScrollView>
    </ScrollableTabView>
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
