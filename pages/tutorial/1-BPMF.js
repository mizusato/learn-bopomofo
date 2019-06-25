import React from 'react'
import { Image } from 'react-native'
import { Content, P, Span, Bold, Title, Img } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let BPMF = props => (
    <Content>
        <Title>1. ㄅ = b</Title>
        <Img src={require('../../assets/b.png')} />
        <P><Span>第一個注音符號「ㄅ」，取自「包」的古字「勹」（即「包」字的右上部分），並將原來的兩筆簡省成了一筆。</Span></P>
        <Pager info={props.nav_info} />
    </Content>
)


BPMF.title = '① 唇音 ㄅㄆㄇㄈ / b, p, m, f'


export default BPMF
