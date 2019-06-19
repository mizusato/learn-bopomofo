import React from 'react'
import { Content, P, Span } from '../../widgets/Content'
import g from '../../styles/global'


let Intro = props => (
    <Content>
        <P><Span>Introduction...</Span></P>
    </Content>
)


Intro.title = '注音符號簡介'
Intro.navigationOptions = {
    title: Intro.title
}


export default Intro
