import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export  class Form extends Component {
    constructor (props){
        super(props);
        this.state = {
            text:''
        };
    }
    render(){
       return(
              <View style={{padding: 10}}>
                <TextInput
                style={{height: 40,width:200}}
                placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({text})}
                />
        </View>
       );
    }
}