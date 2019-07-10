import React from 'react'
import { Content, P, Span, Bold, Title, Img, Sub } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let ZH_CH_SH_R_ER = props => {
    return (
        <Content>
            <Title>1. ㄓ = zh</Title>
            <Img src={require('../../assets/zh.png')} />
            <P><Span></Span></P>
            <Title>2. ㄔ = ch</Title>
            <Img src={require('../../assets/ch.png')} />
            <P><Span></Span></P>
            <Title>3. ㄕ = sh</Title>
            <Img src={require('../../assets/sh.png')} />
            <P><Span></Span></P>
            <Title>4. ㄖ = r</Title>
            <Img src={require('../../assets/r.png')} />
            <P><Span></Span></P>
            <Title>5. ㄦ = er</Title>
            <Img src={require('../../assets/er.png')} />
            <P><Span></Span></P>
            <Pager info={props.nav_info} />
        </Content>
    )
}


ZH_CH_SH_R_ER.title = '📙  卷舌音 ㄓㄔㄕㄖㄦ /  zh, ch, sh, r, er'


export default ZH_CH_SH_R_ER
