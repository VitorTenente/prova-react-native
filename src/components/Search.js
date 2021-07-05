import React from 'react'
import {StyleSheet, TextInput, Image, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


export default props => {
    return (
        <View style = {styles.container}>
           <View style = {styles.containerInput}>
                <TextInput style = {styles.input} placeholder = 'Search Here...'/>
             
                <View  style = {styles.image}>
                    <TouchableOpacity style={styles.ImagePosition}>
                        <Icon name= 'search' size={20}/>
                    </TouchableOpacity>
                </View>
           
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    containerInput : {
        flexDirection:'row',
        padding: 5,
        borderRadius:8,
        width:'98%',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:'2%'
        
    },

    container:{
        justifyContent:'space-between',
        marginBottom: 10
    },

    image : {
        backgroundColor: '#E6E6E6',
        height:38,
        width:34,
        borderRadius:10,
        position:'relative',
        right:15
    },
    input : {
        backgroundColor: '#E6E6E6',
        width:'92%',
        paddingLeft:20,
        height:38,
        fontSize: 19,
        borderRadius:10
    },

    ImagePosition:{
        position:'relative',
        top:6
    }

})
