import React from 'react'
import { Content, P, Span, A, Bold, Title, Img, Sub } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let ZCS = props => {
    return (
        <Content>
            <Title>1. ㄗ = z</Title>
            <Img src={require('../../assets/z.png')} />
            <P><Span>「ㄗ」來源於「節」的古字「卩」，表示「節」字的<A href="https://zh.wikipedia.org/wiki/%E8%80%81%E5%9B%BD%E9%9F%B3">老國音</A>聲母「z」（老國音不分<A href="https://zh.wikipedia.org/wiki/%E5%B0%96%E5%9B%A2%E9%9F%B3">尖團</A>）。</Span></P>
            <Title>2. ㄘ = c</Title>
            <Img src={require('../../assets/c.png')} />
            <P><Span>「ㄘ」表示「七」字的老國音聲母「c」，來源於「七」字的小篆字形：</Span></P>
            <Img src={require('../../assets/tsat-seal.png')} />
            <Title>3. ㄙ = s</Title>
            <Img src={require('../../assets/s.png')} />
            <P><Span>「ㄙ」來源於「私」的古字「厶」，表示「私」字的聲母「s」。</Span></P>
            <Pager info={props.nav_info} />
        </Content>
    )
}


ZCS.title = '📙  平舌音 ㄗㄘㄙ /  z, c, s'


export default ZCS
