import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Title from './Title'
import CardsPricing from './CardsPricing'

export default props => {
    return (
        <View style={styles.container}>
            <Title style={styles.title} title='Pricing Tables'/>
            <CardsPricing title='Free' 
                price='$0' desc='There are many variations
                of passages of Lorem Ipsum avaliable' 
                btn='Sign Up For Free'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10
    },

})