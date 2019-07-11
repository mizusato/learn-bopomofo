import React from 'react'
import { Content, P, Span, Bold, Title, Img, Sub, Display } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let AN_EN_ANG_ENG = props => {
    return (
        <Content>
            <Title>1. ㄢ = an</Title>
            <Img src={require('../../assets/an.png')} />
            <P><Span>「ㄢ」表示「函<Sub>（圅）</Sub>」字的韻母「an」，是把小篆「圅」字的上部楷化得來的：</Span></P>
            <Img src={require('../../assets/ham-seal.png')} />
            <Title>2. ㄣ = en</Title>
            <Img src={require('../../assets/en.png')} />
            <P><Span>「ㄣ」表示「隱」字的韻母「en」（yin=ien），是由「隱」字異體「𠃊」的小篆楷化而來：</Span></P>
            <Img src={require('../../assets/in-seal.png')} />
            <P><Span>《說文》：「𠃊，匿也。象{String.fromCodePoint(0x28485)}<Sub>（辶只）</Sub>曲隱蔽形。凡𠃊之屬皆从𠃊。讀若隱。<Sub>於謹切。</Sub>」</Span></P>
            <P><Span>需要注意的是，「in」韻母在注音中拼作「ㄧㄣ」（即 ien）而不是「ㄧㄋ」；「y」與「in」結合亦拼作「ㄧㄣ」而不是「ㄧㄧㄣ」，如：</Span></P>
            <Display>
                <P><Span>金 = j<Span color='blue'>īn</Span> = ㄐ<Span color='blue'>ㄧㄣ</Span></Span></P>
            </Display>
            <Display>
                <P><Span>銀 = <Span color='green'>yín</Span> = <Span color='green'>ㄧㄣˊ</Span></Span></P>
            </Display>
            <P><Span>並且，韻母「un」在注音中拼作「ㄨㄣ」（即 uen）而不是「ㄨㄋ」；韻母「ün」在注音中拼作「ㄩㄣ」（即 üen）而不是「ㄩㄋ」。如：</Span></P>
            <Display>
                <P><Span>渾 = h<Span color='blue'>ún</Span> = ㄏ<Span color='blue'>ㄨㄣˊ</Span></Span></P>
            </Display>
            <Display>
                <P><Span>巡 = x<Span color='green'>ún</Span> = ㄒ<Span color='green'>ㄩㄣˊ</Span></Span></P>
            </Display>
            <Title>3. ㄤ = ang</Title>
            <Img src={require('../../assets/ang.png')} />
            <P><Span>「ㄤ」即「𡯁<Sub>音汪</Sub>」字，表示「𡯁」字的韻母「ang」。《康熙字典》：「𡯁，《廣韻》《集韻》𠀤<Sub>（並）</Sub>烏光切，音汪。《說文》跛曲脛也，本作尣，从大，象偏曲之形。《徐曰》大一足跛曲，或作{String.fromCodePoint(0x21BEA)}<Sub>（⿺九⿱山王）</Sub>。」</Span></P>
            <Title>4. ㄥ = eng</Title>
            <Img src={require('../../assets/eng.png')} />
            <P><Span>「ㄥ」即「𠃋」字，截取自「厷」字（即「肱」），表示韻母「eng」。雖然「厷」字讀作「g<Span color='blue'>ōng</Span>」，但它的注音拼作「ㄍ<Span color='blue'>ㄨ𠃋</Span>」（即 guēng），這是因為在注音中「ong」韻母被拼作「ㄨ𠃋」（即 ueng）。</Span></P>
            <P><Span>另外，在注音中「ing」韻母拼作「ㄧ𠃋」（即 ieng）；「y」與「ing」結合時亦拼作「ㄧ𠃋」而不是「ㄧㄧ𠃋」，如：</Span></P>
            <Display>
                <P><Span>晶 = j<Span color='blue'>īng</Span> = ㄐ<Span color='blue'>ㄧ𠃋</Span></Span></P>
            </Display>
            <Display>
                <P><Span>瑩 = <Span color='green'>yíng</Span> = <Span color='green'>ㄧ𠃋ˊ</Span></Span></P>
            </Display>
            <P><Span>並且，在注音中「i/y」與「ong」結合拼作「ㄩㄥ」（即 üeng）而不是「ㄧㄨㄥ」，如：</Span></P>
            <Display>
                <P><Span>熊 = x<Span color='blue'>ióng</Span> = ㄒ<Span color='blue'>ㄩㄥˊ</Span></Span></P>
            </Display>
            <Display>
                <P><Span>用 = <Span color='green'>yòng</Span> = <Span color='green'>ㄩㄥˋ</Span></Span></P>
            </Display>
            <Pager info={props.nav_info} />
        </Content>
    )
}


AN_EN_ANG_ENG.title = '📙  鼻音 ㄢㄣㄤㄥ / an, en, ang, eng'


export default AN_EN_ANG_ENG
