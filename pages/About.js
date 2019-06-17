import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SimpleList from '../widgets/SimpleList'


let ListData = [{text:'ABC'},{text:'DEF'},{text:'Foo'},{text:'bar'}]


export default function About () {
    let [clicked, setClicked] = useState('---')
    let click = item => {
        setClicked(item.text)
    }
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.title}>About</Text>
                <Text>Lorem Ipsum.</Text>
                <Text>{ clicked }</Text>
            </View>
            <SimpleList style={style.list}
                        data={ListData} onItemClick={click} >
                { item => <Text>{ item.text }</Text> }
            </SimpleList>
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
