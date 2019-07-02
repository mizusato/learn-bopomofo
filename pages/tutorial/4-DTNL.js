import React from 'react'
import { Content, P, Span, Bold, Title, Img, Sub } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let DTNL = props => {
    return (
        <Content>
            <Title>1. ㄉ = d</Title>
            <Img src={require('../../assets/d.png')} />
            <P><Span>「ㄉ」表示「刀」的聲母「d」，來源於「刀」的小篆字形：</Span></P>
            <Img src={require('../../assets/dao-seal.png')} />
            <Title>2. ㄊ = t</Title>
            <Img src={require('../../assets/t.png')} />
            <P><Span>「ㄊ<Sub>(𠫓)</Sub>」字在古文字中就是倒寫的「子」字，常見於部首。許慎根據《周易》斷定它可被用作「突」字，於是注音符號便以「ㄊ」來表示「突」的聲母「t」。《說文》：「𠫓<Sub>(ㄊ)</Sub>，不順忽出也。从到<Sub>（倒）</Sub>子。《易》曰：『突如其來如。』不孝子突出，不容於內也。凡𠫓之屬皆从𠫓。<Sub>他骨切。</Sub>㐬，或从到<Sub>（倒）</Sub>古文子。即《易》『突』字。」</Span></P>
            <P><Span></Span></P>
            <Title>3. ㄋ = n</Title>
            <Img src={require('../../assets/n.png')} />
            <P><Span>「ㄋ」來源於「乃」的古字「𠄎」，象繩索抛出之狀，疑為「扔」的本字。表示「乃」的聲母「n」。</Span></P>
            <Title>4. ㄌ = l</Title>
            <Img src={require('../../assets/l.png')} />
            <P><Span>「ㄌ」表示「力」的聲母「l」，來源於「力」的古字「{String.fromCodePoint(0x20832)}<Sub>U+20832</Sub>」：</Span></P>
            <Img src={require('../../assets/lik-kai.png')} />
            <Pager info={props.nav_info} />
        </Content>
    )
}


DTNL.title = '③ 舌尖音 ㄉㄊㄋㄌ / d, t, n, l'


export default DTNL
