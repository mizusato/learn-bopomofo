import React from 'react'
import { View, Text } from 'react-native'
import Quiz from '../../widgets/Quiz'


let Options = 'ㄅㄆㄇㄈㄚㄛㄜㄩ'
let QuizData = [
    { chars: '波播博撥', correct: 'ㄅㄛ', options: Options },
    { chars: '破坡頗潑', correct: 'ㄆㄛ', options: Options },
    { chars: '魔摸末墨', correct: 'ㄇㄛ', options: Options },
    { chars: '佛',      correct: 'ㄈㄛ', options: Options },
    { chars: '吧八爸罷', correct: 'ㄅㄚ', options: Options },
    { chars: '怕爬趴琶', correct: 'ㄆㄚ', options: Options },
    { chars: '罵碼麻瑪', correct: 'ㄇㄚ', options: Options },
    { chars: '伐法發髮', correct: 'ㄈㄚ', options: Options },
    { chars: '額餓惡鵝', correct: 'ㄜ',   options: Options }
]


function Quiz_1 (props) {
    return (
        <Quiz data={QuizData} />
    )
}


Quiz_1.title = 'Quiz (1)'


export default Quiz_1
