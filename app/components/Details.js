import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';




class Details extends Component {
    constructor (props){
        super(props);
        this.state = {
            name:this.props.user.title,
            info:this.props.user.details,
            img:this.props.user.url
        }
    }

    render(){
        return(
            <View>
            <Button title='Back' onPress={() => {
                 this.props.navigator.push({
                     id:'Data',
                     user:this.props.user
                    });
            }
            }/>
            <Text>{this.state.name}</Text>
            <Image source={{uri:this.state.img}} style={{width:400,height:200}}/>
            </View>
        );
    }
}


export {Details};
