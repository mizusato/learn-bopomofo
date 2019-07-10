import React from 'react'
import { Content, P, Span, Bold, Title, Img, Sub } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let ZH_CH_SH_R_ER = props => {
    return (
        <Content>
            <Title>1. ㄓ = zh</Title>
            <Img src={require('../../assets/zh.png')} />
            <P><Span>「ㄓ」表示「之」字的聲母「zh」，是由「之」字的小篆字形楷化而來：</Span></P>
            <Img src={require('../../assets/zi.png')} />
            <Title>2. ㄔ = ch</Title>
            <Img src={require('../../assets/ch.png')} />
            <P><Span>「ㄔ」即「彳」字，表示「彳」字的聲母「ch」。</Span></P>
            <Title>3. ㄕ = sh</Title>
            <Img src={require('../../assets/sh.png')} />
            <P><Span>「ㄕ」即「尸」字異體，表示「尸」字的聲母「sh」。</Span></P>
            <Title>4. ㄖ = r</Title>
            <Img src={require('../../assets/r.png')} />
            <P><Span>「ㄖ」即「日」字異體，表示「日」字的聲母「r」。</Span></P>
            <Title>5. ㄦ = er</Title>
            <Img src={require('../../assets/er.png')} />
            <P><Span>「ㄦ」截取自「兒」字的下半部分，表示「兒」字的讀音「er」。</Span></P>
            <Pager info={props.nav_info} />
        </Content>
    )
}


ZH_CH_SH_R_ER.title = '📙  卷舌音 ㄓㄔㄕㄖㄦ /  zh, ch, sh, r, er'


export default ZH_CH_SH_R_ER
