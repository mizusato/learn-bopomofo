import React from 'react'
import { View, Text } from 'react-native'
import Quiz from '../../widgets/Quiz'


let QuizData = [
    { chars: '該改鈣蓋',  anwser: 'ㄍㄞ',   options: 'ㄍㄎㄏㄞㄟㄠㄡㄌ' },
    // TODO
]


function FinalExam (props) {
    return (
        <Quiz data={QuizData} navInfo={props.nav_info} />
    )
}


FinalExam.title = '📝  Final Exam'


export default FinalExam
