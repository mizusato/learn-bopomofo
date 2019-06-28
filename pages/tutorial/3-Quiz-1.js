import React from 'react'
import { View, Text } from 'react-native'
import Quiz from '../../widgets/Quiz'


let Options = 'ㄅㄆㄇㄈㄚㄛㄜㄩ'
let QuizData = [
    { chars: '波播博撥', anwser: 'ㄅㄛ', options: Options },
    { chars: '破坡頗潑', anwser: 'ㄆㄛ', options: Options },
    { chars: '魔摸末墨', anwser: 'ㄇㄛ', options: Options },
    { chars: '佛',      anwser: 'ㄈㄛ', options: Options },
    { chars: '吧八靶罷', anwser: 'ㄅㄚ', options: Options },
    { chars: '怕爬趴琶', anwser: 'ㄆㄚ', options: Options },
    { chars: '罵碼麻瑪', anwser: 'ㄇㄚ', options: Options },
    { chars: '伐法發髮', anwser: 'ㄈㄚ', options: Options },
    { chars: '額餓惡鵝', anwser: 'ㄜ',   options: Options }
]


function Quiz_1 (props) {
    return (
        <Quiz data={QuizData} navInfo={props.nav_info} />
    )
}


Quiz_1.title = 'Quiz (1)'


export default Quiz_1
