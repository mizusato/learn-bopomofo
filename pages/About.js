import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native'
import Separator from '../widgets/Separator'


let ListData = [{text:'ABC'},{text:'DEF'},{text:'Foo'},{text:'bar'}]


function Item (item) {
    console.log(item)
    let { item: item_data } = item
    return (
        <TouchableHighlight onPress={()=>void(0)} underlayColor="hsla(0, 0%, 85%, 0.8)">
          <Text style={{color:'black', paddingTop: 4, paddingBottom: 4, paddingLeft: 8, paddingRight: 8, fontSize: 18}}>{ item_data.text }</Text>
        </TouchableHighlight>
    )
}


export default function About () {
    let data = ListData.map(
        (I,i) => ({ text: I.text, key: String(i) })
    )
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.title}>About</Text>
                <Text>Lorem Ipsum.</Text>
            </View>
            <FlatList style={style.list}
                      data={data}
                      renderItem={Item}
                      ItemSeparatorComponent={Separator} />
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 22
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'hsl(0, 0%, 10%)'
    },
    header: {
        paddingLeft: 12
    },
    list: {
        paddingTop: 22,        
    }
})
