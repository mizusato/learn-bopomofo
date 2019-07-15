import React from 'react'
import { View, Text } from 'react-native'
import SimpleList from '../widgets/SimpleList'
import g from '../styles/global'
import m from '../styles/menu'
import { Menu } from './tutorial/Index'


function Home (props) {
    let goto = (item) => {
        let page_id = String(item.index)
        props.navigation.navigate(page_id)
    }
    return (
        <SimpleList data={Menu} onItemClick={goto}>
            { (item) => (
                <View style={m('item')}>
                    <Text style={m('item_text')}>{ item.title }</Text>
                </View>
            ) }
        </SimpleList>
    )
}


Home.navigationOptions = {
    title: '注音符號教學'
}


export default Home
