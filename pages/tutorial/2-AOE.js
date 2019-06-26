import React from 'react'
import { Content, P, Span, Bold, Title, Sub, Img } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'

const U20000 = String.fromCodePoint(0x20000)


let AOE = props => (
    <Content>
        <Title>1. ㄚ = a</Title>
        <Img src={require('../../assets/a.png')} />
        <P><Span>取「枝丫（枝椏）」的「丫(yā)」字來表示它的韻母「a」。</Span></P>
        <Title>2. ㄛ = o, ㄜ = e</Title>
        <Img src={require('../../assets/o.png')} />
        <P><Span>「ㄛ」來源於「{U20000}<Sub>U+20000</Sub>」，此字可見於《康熙字典》：「《玉篇》《集韻》{U20000}，<Bold>呵</Bold>本字。《說文》反丂也。讀若呵。《六書正譌》氣舒也」。為何「呵(hē)」本字，會被用作「o」的符號呢？這是因為，注音符號最初是用「ㄛ」來表示「e」「o」兩個音的，後來為了區別清楚，才加上了「ㄜ」這個符號來表示「e」，於是原本的「ㄛ」就只用於表示「o」了。「ㄜ(e)」這個符號其實只是「ㄛ(o)」的修改版，「ㄛ」的第二筆被改成了從横的上面起筆，於是就變成了「ㄜ」，因此它們很像，需要加以注意，不要混淆。</Span></P>
        <Pager info={props.nav_info} />
    </Content>
)


AOE.title = '② 單元音 (1) ㄚㄛㄜ / a, o, e'


export default AOE
