import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import Search from './Search'

export default props => {
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                    <Icon name='bars'
                    size={40}/>
                </TouchableOpacity>
                <Icon name='user' size={40}/>
        </View>        
            <Search/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        margin: 10
    },
    header: {
        backgroundColor: '#fff',
        // position: 'absolute',
        // top: 0,
        // zIndex: 10
    }
})