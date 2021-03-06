import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, Linking } from 'react-native'
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


let A = props => (
    <Text style={merge_style(g('a'), props)}
            onPress={()=>{Linking.openURL(props.href)}} >
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


let Sub = props => (
    <Text style={merge_style(g('sub'), props)}>
        { props.children }
    </Text>
)


let Img = props => (
    <Image style={g('img')} resizeMode='contain' source={props.src} />
)


let Display = props => (
    <View style={merge_style(g('display'), props)}>
        { props.children }
    </View>
)


export { Content, P, Span, A, Bold, Title, Ruby, Sub, Img, Display }
