import React from 'react'
import { View, Text } from 'react-native'
import Quiz from '../../widgets/Quiz'


let QuizData = [
    { chars: '杜肚度毒',  anwser: 'ㄉㄨ',   options: 'ㄅㄆㄉㄧㄨㄋㄌㄩ' },
    { chars: '不部補布',  anwser: 'ㄅㄨ',   options: 'ㄅㄆㄉㄧㄨㄌㄝㄋ' },
    { chars: '普鋪撲譜',  anwser: 'ㄆㄨ',   options: 'ㄅㄆㄉㄧㄨㄊㄝㄋ' },
    { chars: '圖土突途',  anwser: 'ㄊㄨ',   options: 'ㄅㄆㄉㄧㄨㄊㄝㄋ' },
    { chars: '地第低滴',  anwser: 'ㄉㄧ',   options: 'ㄅㄆㄉㄧㄨㄌㄝㄋ' },
    { chars: '比必筆幣',  anwser: 'ㄅㄧ',   options: 'ㄅㄆㄉㄧㄨㄋㄌㄩ' },
    { chars: '皮批屁披',  anwser: 'ㄆㄧ',   options: 'ㄅㄆㄉㄧㄨㄋㄌㄩ' },
    { chars: '提體題踢',  anwser: 'ㄊㄧ',   options: 'ㄅㄆㄉㄧㄨㄋㄌㄊ' },
    { chars: '別',       anwser: 'ㄅㄧㄝ',  options: 'ㄅㄆㄉㄧㄨㄌㄝㄋ' },
    { chars: '撇瞥',      anwser: 'ㄆㄧㄝ',  options: 'ㄅㄆㄉㄧㄨㄊㄝㄋ' },
    { chars: '跌碟蝶疊',  anwser: 'ㄉㄧㄝ',  options: 'ㄅㄆㄉㄧㄨㄌㄝㄩ' },
    { chars: '貼鐵',      anwser: 'ㄊㄧㄝ',  options: 'ㄅㄆㄉㄧㄨㄊㄝㄩ' },
    { chars: '怒奴努弩',  anwser: 'ㄋㄨ',   options: 'ㄅㄛㄜㄧㄨㄩㄚㄋ' },
    { chars: '女',       anwser: 'ㄋㄩ',   options: 'ㄅㄛㄜㄧㄨㄩㄚㄋ' },
    { chars: '那拿哪納',  anwser: 'ㄋㄚ',   options: 'ㄅㄛㄜㄧㄨㄩㄚㄋ' },
    { chars: '你擬尼泥',  anwser: 'ㄋㄧ',   options: 'ㄅㄛㄜㄧㄨㄩㄚㄋ' },
    { chars: '羅落洛螺',  anwser: 'ㄌㄨㄛ',  options: 'ㄌㄛㄜㄧㄨㄩㄅㄝ' },
    { chars: '勒',       anwser: 'ㄌㄜ',   options: 'ㄌㄛㄜㄧㄨㄩㄅㄝ' },
    { chars: '率綠呂律',  anwser: 'ㄌㄩ',   options: 'ㄌㄛㄜㄧㄨㄩㄅㄝ' },
    { chars: '路陸魯鹿',  anwser: 'ㄌㄨ',   options: 'ㄌㄛㄜㄧㄨㄩㄅㄝ' },
    { chars: '略掠',      anwser: 'ㄌㄩㄝ',  options: 'ㄌㄛㄜㄧㄨㄩㄅㄝ' },
    { chars: '月越約閱',  anwser: 'ㄩㄝ',   options: 'ㄅㄆㄉㄧㄨㄊㄝㄩ' },
    { chars: '以億易義',  anwser: 'ㄧ',     options: 'ㄅㄆㄉㄧㄨㄊㄝㄩ' },
    { chars: '無五吳物',  anwser: 'ㄨ',     options: 'ㄅㄆㄉㄧㄨㄊㄝㄩ' },
    { chars: '與魚雨玉',  anwser: 'ㄩ',     options: 'ㄅㄆㄉㄧㄨㄊㄝㄩ' }
]


function Quiz_2 (props) {
    return (
        <Quiz data={QuizData} navInfo={props.nav_info} />
    )
}


Quiz_2.title = '📝  Quiz (2)'


export default Quiz_2
