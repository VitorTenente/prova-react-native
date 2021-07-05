import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import PricingTables from '../components/PricingTables'
import Title from '../components/Title'
import Header from '../components/Header'

const initialState = {

}
export default class classname extends Component {

    state = {...initialState}

    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Title breadcrumbs='Home / Pricing Tables'/>
                <PricingTables/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eff1f9'
    }
})