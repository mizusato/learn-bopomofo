import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'


let ListData = [{text:'ABC'},{text:'DEF'},{text:'Foo'},{text:'bar'}]


function Item (item) {
    console.log(item)
    let { item: item_data } = item
    return <Text style={{color:'red'}}>{ item_data.text }</Text>
}


export default function About () {
    let data = ListData.map(
        (I,i) => ({ text: I.text, key: String(i) })
    )
    return (
        <View style={style.container}>
            <Text style={style.title}>About</Text>
            <Text>Lorem Ipsum.</Text>
            <FlatList style={style.list} data={data} renderItem={Item} />
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 22
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'hsl(0, 0%, 10%)'
    },
    list: {
        paddingTop: 22
    }
})
