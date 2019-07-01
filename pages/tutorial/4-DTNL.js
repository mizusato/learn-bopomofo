import React from 'react'
import { Content, P, Span, Bold, Title, Img, Sub } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let DTNL = props => {
    return (
        <Content>
            <Title>1. ㄉ = d</Title>
            <Img src={require('../../assets/d.png')} />
            <P><Span>「ㄉ」來源於「刀」的小篆字形：</Span></P>
            <Img src={require('../../assets/dao-seal.png')} />
            <Title>2. ㄊ = t</Title>
            <Img src={require('../../assets/t.png')} />
            <P><Span>「ㄊ<Sub>(𠫓)</Sub>」字在古文字中就是倒寫的「子」字，常見於部首。許慎根據《周易》斷定它可被用作「突」字，於是注音符號便以「ㄊ」來表示「突」的聲母「t」。《說文》：「𠫓<Sub>(ㄊ)</Sub>，不順忽出也。从到<Sub>（倒）</Sub>子。《易》曰：『突如其來如。』不孝子突出，不容於內也。凡𠫓之屬皆从𠫓。<Sub>他骨切。</Sub>㐬，或从到<Sub>（倒）</Sub>古文子。即《易》『突』字。」</Span></P>
            <P><Span></Span></P>
        </Content>
    )
}


DTNL.title = '③ 舌尖音 ㄉㄊㄋㄌ / d, t, n, l'


export default DTNL
