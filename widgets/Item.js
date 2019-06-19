import React from 'react'
import {
    View,
    TouchableHighlight,
    TouchableNativeFeedback,
    Platform
} from 'react-native'

import { ItemUnderlay } from '../styles/global.js'


export default function Item (props) {
    if (Platform.OS == 'android') {
        return (
            <TouchableNativeFeedback onPress={props.onClick} >
                <View>
                    { props.children }
                </View>
            </TouchableNativeFeedback>
        )
    }
    return (
        <TouchableHighlight onPress={props.onClick}
                            underlayColor={ItemUnderlay} >
                { props.children }
        </TouchableHighlight>
    )
}
