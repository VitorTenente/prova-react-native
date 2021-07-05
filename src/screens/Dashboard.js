import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Header from '../components/Header'
import Title from '../components/Title'
import CardsDashboard from '../components/CardsDashboard'
import ChartsDashboard from '../components/ChartsDashboard'

const initialState = {

}
export default class classname extends Component {

    state = {...initialState}

    render() {
        return (
            <ScrollView style={styles.container}>
                <Header/>
                <Title breadcrumbs='Home / Dashboard'
                title='Hi John, Welcome back' 
                subtitle="Very detailed featured admin"/>
                <CardsDashboard name='user' num='29.75 M' text='Total Users'/>
                <CardsDashboard name='eye' num='51.25 K' text='Daily Visitors'/>
                <CardsDashboard name='cloud' num='166.89 M' text='Downloads'/>
                <CardsDashboard name='shopping-cart' num='1,250k' text='Purchased'/>
                <ChartsDashboard title='Bar Chart' subtitle='Update 2 hours ago'/>
                <ChartsDashboard title='Line Chart' subtitle='Update just now'/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eff1f9'
    }
})