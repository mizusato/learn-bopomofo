import React from 'react'
import { Content, P, Span, Bold, Display } from '../../widgets/Content'
import Ruby from '../../widgets/Ruby'
import g from '../../styles/global'


let Intro = props => (
    <Content>
        <P><Span>慣用漢語拼音的中文使用者在學習注音符號時，經常會犯一些錯誤。這些錯誤大多都是源於注音符號和漢語拼音之間的微妙差別。</Span></P>
        <P><Span>在用漢語拼音給漢字注音時，調號是標在<Bold>主元音</Bold>上的。與漢語拼音不同的是，注音符號將調號追加在<Bold>音節末尾</Bold>，如：</Span></P>
        <Display><Span><Span color='red'>g</Span><Span color='green'>u</Span><Span color='blue'>ǎng</Span> = </Span><Ruby color='red' tip='g'>ㄍ</Ruby><Ruby color='green' tip='u'>ㄨ</Ruby><Ruby color='blue' tip='ang'>ㄤ</Ruby><Ruby color='blue' tip='3'>ˇ</Ruby></Display>
    </Content>
)


Intro.title = '注音符號與漢語拼音的區別'
Intro.navigationOptions = {
    title: Intro.title
}


export default Intro
