import React from 'react'
import { Content, P, Span, Bold, Title, Img } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let BPMF = props => (
    <Content>
        <Title>1. ㄅ = b</Title>
        <Img src={require('../../assets/b.png')} />
        <P><Span>第一個注音符號「ㄅ」，取自「包」的古字「勹」（即「包」字的右上部分），並將原來的兩筆簡省成了一筆。</Span></P>
        <Title>2. ㄆ = p</Title>
        <Img src={require('../../assets/p.png')} />
        <P><Span>「ㄆ」來源於「撲」的古字「攵」/「攴」，這兩個字現在已經不用了，但作為部首，大量出現在常用的漢字之中。《說文》：「攴，小擊也。从又，卜聲。凡攴之屬皆从攴。」即，部首「攴」表示「敲打」一類的意思。例如，「牧」字會「放牛」之意；「敗」字會「破壞」之意（後引申為打敗、失敗）。</Span></P>
        <Title>3. ㄇ = m</Title>
        <Img src={require('../../assets/m.png')} />
        <P><Span>「ㄇ」來源於「冪」的古字「冖」，表示「覆蓋」之意。粵語常用字「<Bold>冚</Bold>」（音 [kʰɜm³⁵]，表示蓋、扣）即是通過部首「<Bold>冖</Bold>」來表意的。在粵語中「<Span color='red'>冚</Span>被」=「<Span color='red'>蓋</Span>被子」；「政府<Span color='blue'>冚實晒</Span>啲消息」=「政府<Span color='blue'>全面封鎖</Span>消息」。</Span></P>
        <Title>4. ㄈ = f</Title>
        <Img src={require('../../assets/f.png')} />
        <P><Span>「ㄈ」來源於「匚」字，《說文》：「匚，<Bold>受物之器</Bold>。象形。凡匚之屬皆从匚。讀若<Bold>方</Bold>。」以「匚」部首的字有「匣」、「匡」、「匪」等等，其中「匡」是「筐」的本字，「匪」是「篚」的本字，它們原本都是表示容器的字。</Span></P>
        <Pager info={props.nav_info} />
    </Content>
)


BPMF.title = '① 唇音 ㄅㄆㄇㄈ / b, p, m, f'


export default BPMF
