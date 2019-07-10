import React from 'react'
import { Content, P, Span, Bold, Ruby, Display } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let Intro = props => (
    <Content>
        <P><Span>123</Span></P>
        <Pager info={props.nav_info} />
    </Content>
)


Intro.title = 'ℹ️  ＊使用方法及軟體資訊＊'


export default Intro
