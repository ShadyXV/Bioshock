import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';



const users = [
    {name:'shady'},
    {name:'sadeep'},
    {name:'amir'},
    {name:'seti'},
    {name:'shady'}
]
class Explore extends Component {
     constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        dataSource: ds.cloneWithRows(users),
        };
    }
    renderRow(user, sectionId, rowId, highlightRow){
        return (
            <View style={styles.row}>
                <Text style={styles.text} >{user.name}</Text>
            </View>
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
        flex:1
    }
})


export {Explore};
