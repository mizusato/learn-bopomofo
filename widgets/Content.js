import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { merge_style } from '../tools/sheet'
import g from '../styles/global'


let Content = props => (
    <ScrollView>
        <View style={merge_style(g('content'), props)} >
            { props.children }
        </View>
    </ScrollView>
)


let P = props => (
    <View style={merge_style(g('p'), props)}>
        { props.children }
    </View>
)


let Span = props => (
    <Text style={merge_style(g('span'), props)}
            selectable={true}>
        { props.children }
    </Text>
)


export { Content, P, Span }
