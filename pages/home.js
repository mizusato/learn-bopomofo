import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


export default function Home (props) {
    let { navigate } = props.navigation
    let goto_about = () => {
        navigate('About')
    }
    return (
        <View style={style.container}>
            <Text style={style.title}>Change The World</Text>
            <Text>This is the home page.</Text>
            <Button onPress={goto_about} title="Goto About" />
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'hsl(0, 0%, 10%)'
    }
})
