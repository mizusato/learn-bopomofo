import React from 'react'
import { Content, P, Span } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let AOU = props => (
    <Content>
        <P>
            <Span>Hello World</Span>
        </P>
        <Pager info={props.nav_info} />
    </Content>
)


AOU.title = '② 單元音 (1) ㄚㄛㄨ / a, o, u'


export default AOU
