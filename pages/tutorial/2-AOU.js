import React from 'react'
import { Content, P, Span } from '../../widgets/Content'
import g from '../../styles/global'


let AOU = props => (
    <Content>
        <P>
            <Span>Hello World</Span>
        </P>
    </Content>
)


AOU.title = '② 單元音 (1) ㄚㄛㄨ / a, o, u'
AOU.navigationOptions = {
    title: AOU.title
}


export default AOU
