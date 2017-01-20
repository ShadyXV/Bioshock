import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Switch,
  Slider,
} from 'react-native';




class Setings extends Component {
    constructor(props){
        super(props);
        this.state = {
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
            value: this.props.value,
            };
    }
    static defaultProps = {
    value: 0,
  };
    render(){
        return(
        <View>
            
            <Switch
            onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.falseSwitchIsOn}/>
            <Switch
            onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
            value={this.state.trueSwitchIsOn} />
            <Text style={styles.text} >
          {this.state.value && +this.state.value.toFixed(3)}
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value) => this.setState({value: value})} />

        
        </View>
        );
    }
};
var styles = StyleSheet.create({
  slider: {
    height: 10,
    margin: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});
export {Setings};


