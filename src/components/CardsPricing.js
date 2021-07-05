import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.containerRow}>
                <Text style={styles.price}>{props.price}</Text>
                <Text style={styles.default}>/month</Text>
            </View>
            <Text style={styles.default}>{props.desc}</Text>
            <View style={styles.btnArea}>
                <Button title={props.btn}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 35,
        marginRight: 130,
        backgroundColor: '#fff',
    },
    containerRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        fontSize: 30
    },
    price: {
        fontSize: 45,
        fontWeight: 'bold'
    },
    default: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10
    },
    btnArea: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 10
    }
})