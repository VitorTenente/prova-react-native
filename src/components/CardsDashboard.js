import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
             <Icon name={props.name}
                size={50}/>
            </TouchableOpacity>
            <View style={styles.containerCol}>
                <Text style={styles.num}>{props.num}</Text>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        padding: 20,
        backgroundColor: '#fff',
        borderTopWidth: 2
    },
    containerCol: {
        alignItems: 'flex-end'
    },
    num: {
        fontSize: 30,
        color: 'red'
    },
    text: {
        fontSize: 15,
        color: 'gray',
    }
})