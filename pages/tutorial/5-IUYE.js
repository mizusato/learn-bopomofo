import React from 'react'
import { Content, P, Span, Bold, Title, Img, Sub } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let IUYE = props => {
    return (
        <Content>
            <Title>1. ㄧ = i, y</Title>

            <Pager info={props.nav_info} />
        </Content>
    )
}


IUYE.title = '④ 單元音 (2) ㄧㄨㄩㄝ / i, u, ü, ê'


export default IUYE
