import React from 'react'
import { Content, P, Span, Title, Img, Sub, Display } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let Qu = String.fromCodePoint(0x20674)
let Qu1 = String.fromCodePoint(0x25B14)


let IUYE = props => {
    return (
        <Content>
            <Title>1. ㄧ = y, i</Title>
            <Img src={require('../../assets/i.png')} />
            <P><Span>「ㄧ」的發音和字形均與「一」字相同，但在横排文字中可寫成一竪（因此有些電腦字型會做成一竪）。表示「y」聲母或「i」韻母，如：</Span></P>
            <Display>
                <P><Span>鴨 = <Span color='blue'>y</Span>ā = <Span color='blue'>ㄧ</Span>ㄚ</Span></P>
            </Display>
            <Display>
                <P><Span>筆 = b<Span color='green'>ǐ</Span> = ㄅ<Span color='green'>ㄧˇ</Span></Span></P>
            </Display>
            <P><Span>需要注意的是，「y」「i」結合拼作「ㄧ」而不是「ㄧㄧ」，如：</Span></P>
            <Display>
                <P><Span>以 = <Span color='red'>yǐ</Span> = <Span color='red'>ㄧˇ</Span></Span></P>
            </Display>
            <Title>2. ㄨ = w, u</Title>
            <Img src={require('../../assets/u.png')} />
            <P><Span>「ㄨ」表示「w」聲母或「u」韻母，來源於「五」的古字形：</Span></P>
            <Img src={require('../../assets/ngu.png')} />
            <P><Span>例：</Span></P>
            <Display>
                <P><Span>我 = <Span color='blue'>w</Span>ǒ = <Span color='blue'>ㄨ</Span>ㄛˇ</Span></P>
            </Display>
            <Display>
                <P><Span>不 = b<Span color='green'>ù</Span> = ㄅ<Span color='green'>ㄨˋ</Span></Span></P>
            </Display>
            <P><Span>需要注意的是，「w」「u」結合拼作「ㄨ」而不是「ㄨㄨ」，如：</Span></P>
            <Display>
                <P><Span>五 = <Span color='red'>wǔ</Span> = <Span color='red'>ㄨˇ</Span></Span></P>
            </Display>
            <Title>3. ㄩ = yu, ü</Title>
            <Img src={require('../../assets/yu.png')} />
            <P><Span>「ㄩ」表示「yu」聲母或「ü」韻母，取的是「{Qu}<Sub>U+20674, 讀若渠</Sub>」字的字形。《說文》：「{Qu}盧，飯器，以柳爲之。象形。凡{Qu}之屬皆从{Qu}。<Sub>去魚切。</Sub>『{Qu1}<Sub>（上下去）</Sub>』，{Qu}或从竹，去聲。」</Span></P>
            <P><Span>例：</Span></P>
            <Display>
                <P><Span>約 = <Span color='blue'>yu</Span>ē = <Span color='blue'>ㄩ</Span>ㄝ</Span></P>
            </Display>
            <Display>
                <P><Span>女 = n<Span color='green'>ǔ</Span> = ㄋ<Span color='green'>ㄩˇ</Span></Span></P>
            </Display>
            <P><Span>需要注意的是，「y」「u(ü)」結合拼作「ㄩ」而不是「ㄧㄨ」或「ㄧㄩ」，如：</Span></P>
            <Display>
                <P><Span>魚 = <Span color='red'>yú</Span> = <Span color='red'>ㄩˊ</Span></Span></P>
            </Display>
            <Title>4. ㄝ = ê</Title>
            <Img src={require('../../assets/ee.png')} />
            <P><Span>「ㄝ」表示「也」字的韻母。雖然「也」字的漢語拼音寫作「yě」，但是它的韻母明顯不是「ㄜ」，因為這裡「e」的發音更像英語的 /e/ 而不是 /ə/。如果使用「ê」這個字母來表示這個音（ㄝ）會更準確，但是漢語拼音為了簡省，把「ㄜ」和「ㄝ」都寫成「e」，除非「ㄝ」單獨成音節（例如：「誒」字的拼音可寫作「ế」）。</Span></P>
            <P><Span>「ㄝ」通常與「ㄧ」組合成韻母「ㄧㄝ」，或與「ㄩ」組合成韻母「ㄩㄝ」，如：</Span></P>
            <Display>
                <P><Span>烈 = li<Span color='blue'>è</Span> = ㄌㄧ<Span color='blue'>ㄝˋ</Span></Span></P>
            </Display>
            <Display>
                <P><Span>略 = lu<Span color='green'>è</Span> = ㄌㄩ<Span color='green'>ㄝˋ</Span></Span></P>
            </Display>
            <P><Span>因為漢語拼音的「e」既可能對應「ㄜ」，也可能對應「ㄝ」，一定要注意不要混淆。</Span></P>
            <Pager info={props.nav_info} />
        </Content>
    )
}


IUYE.title = '④ 單元音 (2) ㄧㄨㄩㄝ / i, u, ü, ê'


export default IUYE
