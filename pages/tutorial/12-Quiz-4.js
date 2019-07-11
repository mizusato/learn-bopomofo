import React from 'react'
import Quiz from '../../widgets/Quiz'


let QuizData = [
    { chars: '家加假佳',  anwser: 'ㄐㄧㄚ',   options: 'ㄐㄑㄒㄍㄟㄚㄡㄧ' },
    { chars: '就酒久舊',  anwser: 'ㄐㄧㄡ',   options: 'ㄍㄐㄑㄒㄟㄠㄡㄧ' },
    { chars: '錢前千欠',  anwser: 'ㄑㄧㄢ',   options: 'ㄐㄑㄒㄍㄢㄠㄡㄧ' },
    { chars: '小笑肖校',  anwser: 'ㄒㄧㄠ',   options: 'ㄐㄑㄒㄍㄢㄠㄡㄧ' },
    { chars: '歸鬼貴桂',  anwser: 'ㄍㄨㄟ',   options: 'ㄐㄑㄒㄍㄟㄨㄡㄧ' },
    { chars: '覺絕決掘',  anwser: 'ㄐㄩㄝ',   options: 'ㄐㄑㄒㄍㄟㄨㄩㄝ' },
    { chars: '後厚侯后',  anwser: 'ㄏㄡ',     options: 'ㄎㄑㄒㄍㄟㄨㄡㄏ' },
    { chars: '開凱楷愾',  anwser: 'ㄎㄞ',     options: 'ㄎㄑㄒㄍㄞㄨㄡㄏ' },
    { chars: '黨當宕盪',  anwser: 'ㄉㄤ',     options: 'ㄉㄊㄋㄌㄢㄣㄤㄥ' },
    { chars: '談探貪坦',  anwser: 'ㄊㄢ',     options: 'ㄉㄊㄋㄌㄢㄣㄤㄥ' },
    { chars: '能',        anwser: 'ㄋㄥ',     options: 'ㄉㄊㄋㄌㄢㄣㄤㄥ' },
    { chars: '林臨淋鄰',  anwser: 'ㄌㄧㄣ',   options: 'ㄉㄊㄋㄌㄢㄣㄧㄥ' },
    { chars: '另令靈領',  anwser: 'ㄌㄧㄥ',   options: 'ㄉㄊㄋㄌㄢㄣㄧㄥ' }
]


function Quiz_4 (props) {
    return (
        <Quiz data={QuizData} navInfo={props.nav_info} />
    )
}


Quiz_4.title = '📝  Quiz (4)'


export default Quiz_4
