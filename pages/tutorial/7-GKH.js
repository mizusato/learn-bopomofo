import React from 'react'
import { Content, P, Span, Bold, Title, Img, Sub } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let GKH = props => {
    return (
        <Content>
            <Title>1. ㄍ = g</Title>
            <Img src={require('../../assets/g.png')} />
            <P><Span></Span></P>
            <Title>2. ㄎ = k</Title>
            <Img src={require('../../assets/k.png')} />
            <P><Span></Span></P>
            <Title>3. ㄏ = h</Title>
            <Img src={require('../../assets/h.png')} />
            <P><Span></Span></P>
            <Pager info={props.nav_info} />
        </Content>
    )
}


GKH.title = '⑤ 舌根音 ㄍㄎㄏ / g, k, h'


export default GKH
