import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {Setings} from './Settings';
import {Explore} from './Explore';
import {AppData} from './AppData';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';



class MainTabs extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render(){
        let navigator = this.props.navigator;
        return(
                 <ScrollableTabView
                    style={styles.container}
                    renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
                    tabBarPosition='overlayTop'
                    >
                    <ScrollView tabLabel='explore' style={styles.tabs}>
                        <Explore navigator={navigator}/>
                    </ScrollView>
                    <ScrollView tabLabel='Bioshock' style={styles.tabs}>
                        
                    </ScrollView>
                    <ScrollView tabLabel='settings' style={styles.tabs}>
                        <Setings/>
                    </ScrollView>
                </ScrollableTabView>
             );
    }
}

const styles = StyleSheet.create({
    container:{
            marginTop:0,
    },
    tabs: {
    marginTop:60
  },
})


export {MainTabs};
