import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Title from './Title'
import CardsDefault from './CardsDefault'

export default props => {
    return (
        <ScrollView style={styles.container}>
            <Title style={styles.title} title={props.title}/>
            <CardsDefault
                title='Card title that wraps to a new line'
                desc='This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.'
            />
            <CardsDefault
                title='Card title'
                desc='This card has supporting text below as a natural lead-in to additional
                content.'
                update='Last updated 3 mins ago'
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    title: {
        color: '#4755ab'
    }
})