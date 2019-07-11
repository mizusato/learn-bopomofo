import React from 'react'
import { View, Text } from 'react-native'
import Quiz from '../../widgets/Quiz'


let QuizData = [
    { chars: '至只紙止',  anwser: 'ㄓ',     options: 'ㄓㄔㄕㄖㄦㄚㄛㄜ' },
    { chars: '車扯撤澈',  anwser: 'ㄔㄜ',   options: 'ㄓㄔㄕㄖㄝㄚㄛㄜ' },
    { chars: '師詩施失',  anwser: 'ㄕ',     options: 'ㄓㄔㄕㄖㄧㄚㄛㄜ' },
    { chars: '如汝儒入',  anwser: 'ㄖㄨ',   options: 'ㄓㄔㄕㄖㄨㄚㄛㄜ' },
    { chars: '日',        anwser: 'ㄖ',     options: 'ㄓㄔㄕㄖㄧㄚㄛㄜ' },
    { chars: '而',        anwser: 'ㄦ',     options: 'ㄓㄔㄕㄖㄦㄚㄛㄜ' },
    { chars: '約月越悅',  anwser: 'ㄩㄝ',   options: 'ㄗㄘㄙㄧㄜㄨㄩㄝ' },
    { chars: '子紫字自',  anwser: 'ㄗ',     options: 'ㄗㄘㄙㄧㄜㄨㄩㄝ' },
    { chars: '才菜踩猜',  anwser: 'ㄘㄞ',   options: 'ㄗㄘㄙㄧㄞㄟㄠㄡ' },
    { chars: '司思斯四',  anwser: 'ㄙ',     options: 'ㄗㄘㄙㄧㄞㄟㄠㄡ' },
    { chars: '退推腿蛻',  anwser: 'ㄊㄨㄟ', options: 'ㄉㄊㄋㄧㄨㄟㄠㄡ' },
    { chars: '到道倒刀',  anwser: 'ㄉㄠ',   options: 'ㄉㄊㄋㄌㄨㄟㄠㄡ' },
    { chars: '你尼擬膩',  anwser: 'ㄋㄧ',   options: 'ㄉㄊㄋㄧㄜㄨㄩㄝ' },
    { chars: '拉辣蠟臘',  anwser: 'ㄌㄚ',   options: 'ㄉㄊㄋㄌㄚㄛㄜㄝ' },
    { chars: '滾棍',      anwser: 'ㄍㄨㄣ', options: 'ㄐㄑㄋㄍㄎㄏㄨㄣ' },
    { chars: '看砍刊堪',  anwser: 'ㄎㄢ',   options: 'ㄑㄍㄎㄏㄢㄣㄤㄥ' },
    { chars: '紅宏洪轟',  anwser: 'ㄏㄨㄥ', options: 'ㄑㄍㄎㄏㄢㄨㄤㄥ' },
    { chars: '久舊酒九',  anwser: 'ㄐㄧㄡ', options: 'ㄑㄍㄐㄒㄡㄣㄧㄨ' },
    { chars: '窮穹',      anwser: 'ㄑㄩㄥ', options: 'ㄑㄍㄐㄧㄡㄥㄩㄨ' },
    { chars: '用永勇擁',  anwser: 'ㄩㄥ',   options: 'ㄑㄍㄐㄧㄡㄥㄩㄨ' },
    { chars: '與魚於雨',  anwser: 'ㄩ',     options: 'ㄑㄍㄐㄧㄈㄇㄩㄨ' },
    { chars: '尋訊薰巡',  anwser: 'ㄒㄩㄣ', options: 'ㄑㄍㄋㄒㄡㄣㄩㄨ' },
    { chars: '放方房芳',  anwser: 'ㄈㄤ',   options: 'ㄅㄩㄇㄈㄢㄣㄤㄥ' },
    { chars: '並併病冰',  anwser: 'ㄅㄧㄥ', options: 'ㄅㄆㄇㄩㄋㄨㄧㄥ' },
    { chars: '品拼頻貧',  anwser: 'ㄆㄧㄣ', options: 'ㄅㄆㄇㄩㄋㄨㄧㄣ' },
    { chars: '莫魔末墨',  anwser: 'ㄇㄛ',   options: 'ㄅㄈㄇㄩㄝㄚㄛㄜ' }
]


function FinalExam (props) {
    return (
        <Quiz data={QuizData} navInfo={props.nav_info} />
    )
}


FinalExam.title = '📝  Final Exam'


export default FinalExam
