import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.breadcrumbs}>{props.breadcrumbs}</Text>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontSize: 25,
        fontWeight: "500",
        paddingLeft: 10,
        marginBottom: 5,
        marginLeft: 10
    },
    subtitle: {
        fontSize: 15,
        paddingLeft: 10,
        marginLeft: 10,
        color: 'gray'
    },
    breadcrumbs: {
        fontSize: 15,
        padding: 10,
        marginLeft: 10,
        marginBottom: 5,
        color: 'blue'
    }
})