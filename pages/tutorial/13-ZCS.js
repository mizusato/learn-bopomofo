import React from 'react'
import { Content, P, Span, Bold, Title, Img, Sub } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let ZCS = props => {
    return (
        <Content>
            <Title>1. ㄗ = z</Title>
            <Img src={require('../../assets/z.png')} />
            <P><Span></Span></P>
            <Title>2. ㄘ = c</Title>
            <Img src={require('../../assets/c.png')} />
            <P><Span></Span></P>
            <Title>3. ㄙ = s</Title>
            <Img src={require('../../assets/s.png')} />
            <P><Span></Span></P>
            <Pager info={props.nav_info} />
        </Content>
    )
}


ZCS.title = '⑨ 平舌音 ㄗㄘㄙ /  z, c, s'


export default ZCS
