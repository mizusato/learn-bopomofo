import React from 'react'
import { Content, P, Span, Bold } from '../../widgets/Content'
import g from '../../styles/global'


let BPMF = props => (
    <Content>
        <P>
            <Span>CHANGE THE WORLD</Span>
        </P>
        <P>
            <Span>Lorem ipsum <Span color='red'>dolor</Span> sit amet, <Bold>consectetur</Bold> adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <Bold color='blue'>exercitation</Bold> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Span>
        </P>
    </Content>
)


BPMF.title = '① 唇音 ㄅㄆㄇㄈ / b, p, m, f'
BPMF.navigationOptions = {
    title: BPMF.title
}


export default BPMF
