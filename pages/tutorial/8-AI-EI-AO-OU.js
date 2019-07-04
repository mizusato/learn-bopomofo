import React from 'react'
import { Content, P, Span, Bold, Title, Img, Sub } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let AI_EI_AO_OU = props => {
    return (
        <Content>
            <Title>1. ㄞ = ai</Title>
            <Img src={require('../../assets/ai.png')} />
            <P><Span></Span></P>
            <Title>2. ㄟ = ei</Title>
            <Img src={require('../../assets/ei.png')} />
            <P><Span></Span></P>
            <Title>3. ㄠ = ao</Title>
            <Img src={require('../../assets/ao.png')} />
            <P><Span></Span></P>
            <Title>4. ㄡ = ou</Title>
            <Img src={require('../../assets/ou.png')} />
            <P><Span></Span></P>
            <Pager info={props.nav_info} />
        </Content>
    )
}


AI_EI_AO_OU.title = '⑥ 雙元音 ㄞㄟㄠㄡ / ai, ei, ao, ou'


export default AI_EI_AO_OU
