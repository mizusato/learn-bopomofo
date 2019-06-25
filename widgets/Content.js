import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
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


let Title = props => (
    <P style={merge_style({}, props)}>
        <Span style={merge_style(g('bold', 'big'), { style: props.spanStyle })}>
            { props.children }
        </Span>
    </P>
)


let Ruby = props => (
    <View style={merge_style(g('ruby'), props)}>
        <Text style={merge_style(g('ruby_tip'), { style: props.tipStyle, color: props.color })} selectable={true} >
            { props.tip }
        </Text>
        <Span style={merge_style(g('ruby_span'), { style: props.spanStyle, color: props.color })} >
            { props.children }
        </Span>
    </View>
)


let Img = props => (
    <Image style={g('img')} source={props.src} />
)


let Display = props => (
    <View style={merge_style(g('display'), props)}>
        { props.children }
    </View>
)


export { Content, P, Span, Bold, Title, Ruby, Img, Display }
