import React from 'react'
import { View } from 'react-native'


export default function Separator (props) {
    let style = {
        height: 1,
        width: '100%',
        backgroundColor: 'hsla(0, 0%, 75%, 0.8)'
    }
    return <View style={style}></View>
}
