import React from 'react'
import { Content, P, Span, Bold, Title, Img, Sub } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let IUYE = props => {
    return (
        <Content>
            <Title>1. ㄧ = i, y</Title>
            <Img src={require('../../assets/i.png')} />
            <Title>2. ㄨ = w, u</Title>
            <Img src={require('../../assets/u.png')} />
            <Title>3. ㄩ = ü</Title>
            <Img src={require('../../assets/yu.png')} />
            <Title>4. ㄝ = ê</Title>
            <Img src={require('../../assets/ee.png')} />
            <Pager info={props.nav_info} />
        </Content>
    )
}


IUYE.title = '④ 單元音 (2) ㄧㄨㄩㄝ / i, u, ü, ê'


export default IUYE
