import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Header from '../components/Header'
import Title from '../components/Title'
import CardsComplete from '../components/CardsComplete'

const initialState = {

}
export default class classname extends Component {

    state = {...initialState}

    render() {
        return (
            <ScrollView style={styles.container}>
                <Header/>
                <Title breadcrumbs='Home / Elements / Cards'/>
                <View style={styles.containerCards}>
                    <CardsComplete title='Card Columns'/>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eff1f9'
    },
    containerCards: {
        backgroundColor: '#fff',
        margin: 10
    },
    text: {
        color: '#4755ab',
        fontSize: 30,
        marginLeft: 30
    }
})