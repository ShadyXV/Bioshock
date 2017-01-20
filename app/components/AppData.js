import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';

import {Details} from './Details';


const users = [
    {name:'rose'},
    {name:'jasmin'},
    {name:'tulip'},
    {name:'sage'},
    {name:'weed'}
]
class AppData extends Component {
     constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        dataSource: ds,
        };
    }
    componentDidMount(){
        this.fetchUsers(); 
    }
    fetchUsers (){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((res) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(res)
            });
        });
    }

    onPress(user){
        this.props.navigator.push({
            id:'Detail'
        });
    }
    renderRow(user, sectionId, rowId, highlightRow){
        return (
            <TouchableHighlight onPress={this.onPress(user)}>
            <View style={styles.row}>
                <Text style={styles.text} >{user.name}</Text>
                <Text style={styles.text_address} >{user.address.street},{user.address.city}</Text>
            </View>
            </TouchableHighlight>
        )
    }
    render(){
        return(
            <ListView dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}/>          
        );
    }
};
const  styles  = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        backgroundColor:'#f4f4f4',
        marginBottom:4
    },
    text:{
        flex:1,
        flexDirection:'column'
    },
    text_address:{
        fontSize:10,
    }
})


export {AppData};
