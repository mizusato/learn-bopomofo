import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { assert, shuffle, choose } from '../tools/utility'
import g from '../styles/global'


function Option (props) {
    return (
        <TouchableOpacity style={g('quiz_option')}>
            { (props.index < 8)? (
                <Text style={g('quiz_option_text')}>
                    { props.data.options[props.index] }
                </Text>
            ): <Text style={g('quiz_option_text')}>{'⇨'}</Text> }
        </TouchableOpacity>
    )
}


function Quiz (props) {
    let total = props.data.length
    let [progress, setProgress] = useState(0)
    let [correct, setCorrect] = useState(0)
    let [selected, setSelected] = useState([])
    if (progress == total) {
        return (
            <View style={g('quiz')}>
                <Text></Text>
            </View>
        )
    }
    let current = props.data[progress]
    return (
        <View style={g('quiz')}>
            <View>
                <Text style={g('quiz_char')}>
                    { choose(current.chars) }
                </Text>
            </View>
            <View style={g('quiz_info')}>
                <Text style={g('quiz_info_text')}>
                    進度：{progress}/{total}
                </Text>
                <Text style={g('quiz_info_text', 'quiz_info_sep')}>
                    {' '}
                </Text>
                <Text style={g('quiz_info_text')}>
                    選擇：{selected.length}/{current.correct.length}
                </Text>
            </View>
            <View>
                { [[0, 1, 2], [3, 4, 5], [6, 7, 8]].map((row, i) => (
                    <View style={g('quiz_row')} key={String(i)}>
                        { row.map(item_index => (
                            <Option data={current} index={item_index}
                                    key={String(item_index)} />
                        )) }
                    </View>
                )) }
            </View>
        </View>
    )
}


export default props => {
    data = shuffle(props.data)
    data.forEach(item => {
        item.options = shuffle(item.options)
    })
    return Quiz({data})
}
