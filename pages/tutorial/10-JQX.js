import React from 'react'
import { Content, P, Span, Bold, Title, Img, Sub } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let JQX = props => {
    return (
        <Content>
            <Title>1. ㄐ = j</Title>
            <Img src={require('../../assets/j.png')} />
            <P><Span>「ㄐ」來源於「糾」的古字「丩」，表示「糾」字的聲母「j」。</Span></P>
            <Title>2. ㄑ = q</Title>
            <Img src={require('../../assets/q.png')} />
            <P><Span>「ㄑ」即「𡿨<Sub>讀若犬</Sub>」字（「畎」之異體），表示「𡿨」字的聲母「q」。《說文》：「𡿨，水小流也。《周禮》：『匠人爲溝洫，㭒廣五寸，二㭒爲耦。一耦之伐，廣尺深尺謂之𡿨，倍𡿨謂之遂，倍遂曰溝，倍溝曰洫，倍洫曰巜。』凡𡿨之屬皆從𡿨。<Sub>姑泫切。</Sub>{String.fromCodePoint(0x24C1D)}<Sub>（左田右川）</Sub>，古文𡿨，从田从川。畎，篆文𡿨，从田，犬聲。六畎爲一畝。」</Span></P>
            <Title>3. ㄒ = x</Title>
            <Img src={require('../../assets/x.png')} />
            <P><Span>「ㄒ」來源於「下」的古字「丅」，表示「下」字的聲母「x」。</Span></P>
            <Pager info={props.nav_info} />
        </Content>
    )
}


JQX.title = '📙  舌面音 ㄐㄑㄒ /  j, q, x'


export default JQX
