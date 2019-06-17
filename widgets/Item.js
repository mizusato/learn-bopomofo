import React from 'react'
import { TouchableHighlight } from 'react-native'
import g, { ItemUnderlay } from '../styles/global.js'


export default function Item (props) {
    return (
        <TouchableHighlight onPress={props.onClick}
                            style={g('item')}
                            underlayColor={ItemUnderlay}>
            { props.children }
        </TouchableHighlight>
    )
}
