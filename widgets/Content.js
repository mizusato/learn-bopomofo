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

let Bold = props => (
    <Span style={merge_style(g('bold'), props)}>
        { props.children }
    </Span>
)


let Display = props => (
    <View style={merge_style(g('display'), props)}>
        { props.children }
    </View>
)


export { Content, P, Span, Bold, Display }
