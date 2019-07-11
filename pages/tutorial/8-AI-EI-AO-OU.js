import React from 'react'
import { Content, P, Span, Bold, Title, Img, Sub, Display } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let AI_EI_AO_OU = props => {
    return (
        <Content>
            <Title>1. ㄞ = ai</Title>
            <Img src={require('../../assets/ai.png')} />
            <P><Span>「ㄞ」即「{String.fromCodePoint(0x20005)}<Sub>U+20005</Sub>」字（「亥」字的異體），表示「亥」字的韻母「ai」。</Span></P>
            <Title>2. ㄟ = ei</Title>
            <Img src={require('../../assets/ei.png')} />
            <P><Span>「ㄟ」表示韻母「ei」，它來源於「乀」字的一種讀音「fēi」的韻母。根據《康熙字典》，「乀」字有很多種讀音：「乀，《廣韻》<Span color='green'>敷勿切</Span>；《集韻》<Span color='green'>分勿切</Span>，𠀤<Sub>（並）</Sub><Span color='green'>音弗</Span>。《說文》左戾也，从反丿；又《集韻》<Span color='blue'>力詰切，音列</Span>。義同。按《字彙》丿右戾譌左，乀左戾譌右，𠀤<Sub>（並）</Sub><Span color='red'><Sub>（音）</Sub>非</Span>。」</Span></P>
            <P><Span>需要注意的是，韻母「ui」在注音中拼作「ㄨㄟ」（即 uei）而不是「ㄨㄧ」，如：</Span></P>
            <Display>
                <P><Span>會 = h<Span color='blue'>uì</Span> = ㄏ<Span color='blue'>ㄨㄟˋ</Span></Span></P>
            </Display>
            <Title>3. ㄠ = ao</Title>
            <Img src={require('../../assets/ao.png')} />
            <P><Span>「ㄠ」即「幺」字（台灣俗寫「么」），表示「幺」字的韻母「ao」。</Span></P>
            <Title>4. ㄡ = ou</Title>
            <Img src={require('../../assets/ou.png')} />
            <P><Span>「ㄡ」是「又」字的變體，表示「又」字的韻母「ou」。需要注意的是，「i」「u」結合拼作「ㄧㄡ」（即 iou）而不是「ㄧㄨ」，如：</Span></P>
            <Display>
                <P><Span>流 = l<Span color='blue'>iú</Span> = ㄌ<Span color='blue'>ㄧㄡˊ</Span></Span></P>
            </Display>
            <Pager info={props.nav_info} />
        </Content>
    )
}


AI_EI_AO_OU.title = '📙  雙元音 ㄞㄟㄠㄡ / ai, ei, ao, ou'


export default AI_EI_AO_OU
