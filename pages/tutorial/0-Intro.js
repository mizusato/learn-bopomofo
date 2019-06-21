import React from 'react'
import { Content, P, Span, Bold, Ruby, Display } from '../../widgets/Content'
import g from '../../styles/global'


let Intro = props => (
    <Content>
        <P><Span>慣用漢語拼音的中文使用者在學習注音符號時，經常會犯一些錯誤。這些錯誤大多都是源於注音符號和漢語拼音之間的微妙差別。</Span></P>
        <P><Span>在用漢語拼音給漢字注音時，調號是標在<Bold>主元音</Bold>上的。與漢語拼音不同的是，注音符號將調號追加在<Bold>音節末尾</Bold>，如：</Span></P>
        <Display style={g('d_ruby')}><Span><Span color='red'>g</Span><Span color='green'>u</Span><Span color='blue'>ǎng</Span> = </Span><Ruby color='red' tip='g'>ㄍ</Ruby><Ruby color='green' tip='u'>ㄨ</Ruby><Ruby color='blue' tip='ang'>ㄤ</Ruby><Ruby color='blue' tip='3'>ˇ</Ruby></Display>
        <P><Span>注音符號中的陰平聲 (1 聲) 調號通常省略不寫，如：</Span></P>
        <Display style={g('d_ruby')}><Span><Span color='red'>g</Span><Span color='blue'>ē</Span> = </Span><Ruby color='red' tip='g'>ㄍ</Ruby><Ruby color='blue' tip='e'>ㄜ</Ruby><Ruby color='blue' tip='1'></Ruby></Display>
        <P><Span>然而在漢語拼音中，省略調號表示的是輕聲，注意不要混淆。在注音符號中，輕聲以點號 · 表示，如：</Span></P>
        <Display style={g('d_ruby')}><Span><Span color='red'>n</Span><Span color='blue'>e</Span> = </Span><Ruby color='red' tip='n'>ㄋ</Ruby><Ruby color='blue' tip='e'>ㄜ</Ruby><Ruby color='blue'>·</Ruby></Display>
        <P><Span>注音和拼音的聲調標註方法雖然不同，但是區別並不是太大——真正大到會使學習者不斷犯錯誤的的差別，其實在<Bold>韻母</Bold>上。在將多個簡單韻母組合成一個複雜韻母時，注音和拼音採用了不同的組合規則。下面來看幾個例子：</Span></P>
        <P><Span>「油」字，拼音為「y<Span color='green'>óu</Span>」，注音為「ㄧ<Span color='green'>ㄡˊ</Span>」；「球」字，拼音為「qi<Span color='blue'>ú</Span>」，注音為「ㄑㄧ<Span color='blue'>ㄡˊ</Span>」。假如單看「油」字，「<Bold>ㄡ</Bold>」似乎和「<Bold>ou</Bold>」對應；然而再看「球」字，「<Bold>ㄡ</Bold>」似乎和「<Bold>u</Bold>」也是對應的，莫名其妙。這種情形產生的原因是：「球」的準確讀法是「qióu」，然而漢語拼音規定這個音必須按照簡省寫法寫成「qiú」。</Span></P>
    </Content>
)


Intro.title = '簡介：注音與拼音的不同點'
Intro.navigationOptions = {
    title: Intro.title
}


export default Intro
