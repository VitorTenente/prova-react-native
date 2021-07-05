import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import cartImg from '../../assets/img/cart.jpg'

export default props => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={cartImg}/>
            <View style={styles.containerText}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.desc}>
                    {props.desc}
                </Text>
                <Text style={styles.update}>{props.update}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
        margin: 15,
        borderWidth: 1

    },
    containerText: {
        justifyContent: 'flex-start',
        paddingTop: 10,
        paddingLeft: 50,
        paddingRight: 50
    },
    img: {
        marginTop: 20,
        width: '80%',
        height: 250,
        borderRadius: 5
    },
    title: {
        fontSize: 23,
        color: 'black',
        padding: 5
    },
    desc: {
        fontSize: 15,
        color: '#5d6b71',
        padding: 5
    },
    update:{
        color: '#6C767D',
        fontSize: 10,
        paddingBottom: 10
    }
})