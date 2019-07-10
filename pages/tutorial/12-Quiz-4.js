import React from 'react'
import { View, Text } from 'react-native'
import Quiz from '../../widgets/Quiz'


let QuizData = [
    { chars: '該改鈣蓋',  anwser: 'ㄍㄞ',   options: 'ㄍㄎㄏㄞㄟㄠㄡㄌ' },
    // TODO
]


function Quiz_4 (props) {
    return (
        <Quiz data={QuizData} navInfo={props.nav_info} />
    )
}


Quiz_4.title = 'Quiz (4)'


export default Quiz_4
