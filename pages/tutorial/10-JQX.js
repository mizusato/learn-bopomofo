import React from 'react'
import { Content, P, Span, Bold, Title, Img, Sub } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let JQX = props => {
    return (
        <Content>
            <Title>1. ㄐ = j</Title>
            <Img src={require('../../assets/j.png')} />
            <P><Span></Span></P>
            <Title>2. ㄑ = q</Title>
            <Img src={require('../../assets/q.png')} />
            <P><Span></Span></P>
            <Title>3. ㄒ = x</Title>
            <Img src={require('../../assets/x.png')} />
            <P><Span></Span></P>
            <Pager info={props.nav_info} />
        </Content>
    )
}


JQX.title = '⑤ 舌面音 ㄐㄑㄒ /  j, q, x'


export default JQX
