import React from 'react'
import { Content, P, Span, Bold, Title, Img, Sub } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let GKH = props => {
    return (
        <Content>
            <Title>1. ㄍ = g</Title>
            <Img src={require('../../assets/g.png')} />
            <P><Span>「ㄍ」表示「巜<Sub>讀若怪</Sub>」字的聲母「g」。《说文》：「巜，水流澮澮也。方百里爲巜，廣二尋，深二仞。凡巜之屬皆从巜。<Sub>古外切。</Sub>」</Span></P>
            <Title>2. ㄎ = k</Title>
            <Img src={require('../../assets/k.png')} />
            <P><Span>「ㄎ」來源於「考」字的聲符「丂」，表示「考」字的聲母「k」。</Span></P>
            <Title>3. ㄏ = h</Title>
            <Img src={require('../../assets/h.png')} />
            <P><Span>「ㄏ」表示「厂<Sub>音 罕/旱</Sub>」字的聲母「h」。「厂」是常用部首之一，《說文》：「厂，山石之厓巖，人可居。象形。凡厂之屬皆从厂。<Sub>呼旱切。</Sub>」</Span></P>
            <Pager info={props.nav_info} />
        </Content>
    )
}


GKH.title = '📙 舌根音  ㄍㄎㄏ / g, k, h'


export default GKH
