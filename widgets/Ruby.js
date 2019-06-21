import React from 'react'
import { View, Text } from 'react-native'
import { merge_style } from '../tools/sheet'
import { Span } from './Content'
import g from '../styles/global'


export default function Ruby (props) {
    return (
        <View style={merge_style(g('ruby'), props)}>
            <Text style={merge_style(g('tip'), { style: props.tipStyle, color: props.color })} selectable={true} >
                { props.tip }
            </Text>
            <Span style={merge_style({}, { style: props.spanStyle, color: props.color })} >
                { props.children }
            </Span>
        </View>
    )
}
