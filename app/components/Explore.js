import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight,
} from 'react-native';
import {Details} from './Details';



const users = [
        {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ",
            "url": "http://placehold.it/600/92c952",
            "thumbnailUrl": "http://placehold.it/150/30ac17"
        },
        {
            "albumId": 1,
            "id": 2,
            "title": "reprehenderit m",
            "url": "http://placehold.it/600/771796",
            "thumbnailUrl": "http://placehold.it/150/dff9f6"
        },
        {
            "albumId": 1,
            "id": 3,
            "title": "officia porro ",
            "url": "http://placehold.it/600/24f355",
            "thumbnailUrl": "http://placehold.it/150/1941e9"
        },
        {
            "albumId": 1,
            "id": 4,
            "title": "culpa odie",
            "url": "http://placehold.it/600/d32776",
            "thumbnailUrl": "http://placehold.it/150/39e985"
        },
        {
            "albumId": 1,
            "id": 5,
            "title": "natus nisi",
            "url": "http://placehold.it/600/f66b97",
            "thumbnailUrl": "http://placehold.it/150/7735a"
        },
        {
            "albumId": 1,
            "id": 6,
            "title": "accusamus ea ",
            "url": "http://placehold.it/600/56a8c2",
            "thumbnailUrl": "http://placehold.it/150/c672a0"
        },
        {
            "albumId": 1,
            "id": 7,
            "title": "officia delectus ",
            "url": "http://placehold.it/600/b0f7cc",
            "thumbnailUrl": "http://placehold.it/150/4105a5"
        },
        {
            "albumId": 1,
            "id": 8,
            "title": "aut porro officiis",
            "url": "http://placehold.it/600/54176f",
            "thumbnailUrl": "http://placehold.it/150/412ffd"
        }
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
        let url = user.url;
       
        return (
            <TouchableHighlight onPress={() => {
                 this.props.navigator.push({
            id:'Detail'
        });
            }}>
            <View style={styles.row}>
                <View>
                    <Image source={{uri:url}} style={{height:200,width:400}} />  
                </View>
                <View style={styles.textBox}>
              
                  <Text style={styles.text} >{user.title}</Text>

                </View>
      
             </View>
            </TouchableHighlight>
        )
    }



    render(){
        return(
                <View>
                
                     <ListView dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}/> 
     
                </View>
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
    textBox:{
        position:'absolute',
        bottom:60,
        left:30,
        backgroundColor: '#F5FCFF',
    },
    text:{
        fontSize:24
    }
})


export {Explore};
