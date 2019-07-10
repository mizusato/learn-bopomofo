import React from 'react'
import { View, Text } from 'react-native'
import Quiz from '../../widgets/Quiz'


let QuizData = [
    { chars: '該改鈣蓋',  anwser: 'ㄍㄞ',   options: 'ㄍㄎㄏㄞㄟㄠㄡㄌ' },
    { chars: '靠考烤銬',  anwser: 'ㄎㄠ',   options: 'ㄍㄎㄏㄞㄟㄠㄡㄌ' },
    { chars: '類累雷淚',  anwser: 'ㄌㄟ',   options: 'ㄍㄎㄏㄞㄟㄠㄡㄌ' },
    { chars: '後厚后猴',  anwser: 'ㄏㄡ',   options: 'ㄍㄎㄏㄞㄟㄠㄡㄌ' },
    { chars: '哭酷苦褲',  anwser: 'ㄎㄨ',   options: 'ㄍㄎㄏㄩㄟㄠㄡㄨ' },
    { chars: '卡',       anwser: 'ㄎㄚ',   options: 'ㄍㄎㄏㄩㄟㄚㄛㄜ' },
    { chars: '哈',       anwser: 'ㄏㄚ',   options: 'ㄍㄎㄏㄩㄟㄚㄛㄜ' },
    { chars: '過國果鍋',  anwser: 'ㄍㄨㄛ',  options: 'ㄍㄎㄏㄩㄟㄨㄛㄜ' },
    { chars: '個各歌割',  anwser: 'ㄍㄜ',   options: 'ㄍㄎㄏㄩㄟㄨㄛㄜ' },
    { chars: '白擺拜敗',  anwser: 'ㄅㄞ',   options: 'ㄅㄆㄉㄋㄠㄡㄞㄟ' },
    { chars: '拍派牌湃',  anwser: 'ㄆㄞ',   options: 'ㄅㄆㄉㄋㄠㄡㄞㄟ' },
    { chars: '鬧腦撓惱',  anwser: 'ㄋㄠ',   options: 'ㄅㄆㄉㄋㄠㄡㄞㄟ' },
    { chars: '非飛費肥',  anwser: 'ㄈㄟ',   options: 'ㄅㄈㄩㄋㄠㄡㄞㄟ' },
    { chars: '某謀眸牟',  anwser: 'ㄇㄡ',   options: 'ㄅㄇㄩㄋㄠㄡㄞㄟ' }
]


function Quiz_3 (props) {
    return (
        <Quiz data={QuizData} navInfo={props.nav_info} />
    )
}


Quiz_3.title = '📝  Quiz (3)'


export default Quiz_3
