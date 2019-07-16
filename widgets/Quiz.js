import React, { useState, useMemo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Content, P, Span, Bold, Title, Display } from './Content'
import Pager, { ReloadButton } from './Pager'
import { assert, shuffle, choose } from '../tools/utility'
import g from '../styles/global'


function Option (props) {
    let fragment = props.data.options[props.index]
    let is_input = (props.index < 8)
    function click () {
        if (is_input) {
            props.onInput(fragment)
        } else {
            props.onBackspace()
        }
    }
    return (
        <TouchableOpacity style={g('quiz_option')} onPress={click} >
            { is_input? (
                <Text style={g('quiz_option_text')}>
                    { fragment }
                </Text>
            ): (
                <Text style={g('quiz_option_text', 'quiz_del')}>
                    {'←'}
                </Text>
            ) }
        </TouchableOpacity>
    )
}


function Result (props) {
    return (
        <Content>
            <Title>Quiz Result</Title>
            <P><Span>共 </Span><Span>{ props.total }</Span><Span> 題，答對 </Span><Span color='green'>{ props.correct }</Span><Span> 題，答錯 </Span><Span color='red'>{ props.wrong.length }</Span><Span> 題</Span></P>
            { (props.correct == props.total)? (
                <>
                    <P><Span>很好，全部答對！</Span></P>
                    <Pager onlyNext={true} info={props.navInfo} />
                </>
            ): (
                <>
                    <P><Span>以下是錯題表：</Span></P>
                    { props.wrong.map((item, i) => (
                        <P key={String(i)}>
                            <Span>{i}. 「{ item.question }」，</Span>
                            <Span>注音（省去聲調）為：<Bold color='green'>
                                { item.anwser }
                            </Bold>，</Span>
                            <Span>您的答案：<Bold color='red'>
                                { item.buffer }
                            </Bold></Span>
                        </P>
                    )) }
                    <ReloadButton>再試一次</ReloadButton>
                    <Pager onlyNext={true} info={props.navInfo} />
                </>
            ) }
        </Content>
    )
}


function Quiz (props) {
    let total = props.data.length
    let [progress, setProgress] = useState(0)
    let [correct, setCorrect] = useState(0)
    let [wrong, setWrong] = useState([])
    let [buffer, setBuffer] = useState('')
    let [lock, setLock] = useState(false)
    if (progress == total) {
        return (
            <Result total={total} correct={correct} wrong={wrong}
                    navInfo={props.navInfo} />
        )
    }
    let current = props.data[progress]
    function input (fragment) {
        if (lock) { return }
        let new_buffer = buffer + fragment
        let should_go_next = (new_buffer.length == current.anwser.length)
        setBuffer(new_buffer)
        if (should_go_next) {
            setLock(true)
            setTimeout(() => {
                setLock(false)
                if (new_buffer == current.anwser) {
                    setCorrect(correct + 1)
                } else {
                    setWrong([...wrong, {
                        buffer: new_buffer,
                        anwser: current.anwser,
                        question: current.question
                    }])
                }
                setBuffer('')
                setProgress(progress + 1)
            }, 500)
        }
    }
    function backspace () {
        if (lock) { return }
        if (buffer.length > 0) {
            setBuffer(buffer.slice(0, buffer.length-1))
        }
    }
    return (
        <View style={g('quiz')}>
            <View>
                <Text style={g('quiz_buffer')}>
                    { buffer }
                </Text>
            </View>
            <View>
                <Text style={g('quiz_char')}>
                    { current.question }
                </Text>
            </View>
            <View style={g('quiz_info')}>
                <Text style={g('quiz_info_text')}>
                    進度：{progress+1}/{total}
                </Text>
                <Text style={g('quiz_info_text', 'quiz_info_sep')}>
                    {' '}
                </Text>
                <Text style={g('quiz_info_text')}>
                    符號：{buffer.length}/{current.anwser.length}
                </Text>
            </View>
            <View>
                { [[6, 7, 8], [3, 4, 5], [0, 1, 2]].map((row, i) => (
                    <View style={g('quiz_row')} key={String(i)}>
                        { row.map(item_index => (
                            <Option data={current} index={item_index}
                                    onInput={input} onBackspace={backspace}
                                    key={String(item_index)} />
                        )) }
                    </View>
                )) }
            </View>
        </View>
    )
}


export default props => {
    let data = useMemo(() => {
        let data = shuffle(props.data)
        data = data.map(item => Object.assign({}, item, {
            options: shuffle(item.options),
            question: choose(item.chars)
        }))
        return data
    }, [])
    return Quiz({data, navInfo: props.navInfo })
}
