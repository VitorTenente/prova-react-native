import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 200,
        margin: 10,
        justifyContent: 'space-between'
    },
    title: {
        textAlign: 'center',
        color: '#4755ab',
        fontSize: 20,
        paddingTop: 10
    },
    subtitle:{
        textAlign: 'center',
        color: '#6C767D',
        fontSize: 15,
        paddingBottom: 10
    }
})