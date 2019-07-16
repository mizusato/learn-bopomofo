import React from 'react'
import { Content, P, Span, A, Bold, Ruby, Display, Title } from '../../widgets/Content'
import Pager from '../../widgets/Pager'
import g from '../../styles/global'


let Intro = props => (
    <Content>
      <Title>簡介</Title>
      <P><Span>本教學程式之目的為向慣用漢語拼音的中文使用者講解注音符號之字源及與漢語拼音之對應關係，除手機應用程式外亦提供 Web 版本。其中手機版本提供 Quiz 功能，可用於檢驗學習者對所學內容的掌握程度（Web 版本不支援）。</Span></P>
      <Title>聲明</Title>
      <P><Span>・這裡<Bold color='red'>不是</Bold>語音學教學。講解文中出現的有關發音的描述未必準確。</Span></P>
      <P><Span>・這裡<Bold color='red'>不是</Bold>聲韻學教學。講解文中提到或引用的反切等聲韻學概念不會被多加解釋。</Span></P>
      <P><Span>・這裡<Bold color='red'>不是</Bold>文字學教學。講解文中對漢字源流的解釋可能不正確或有偏差，如有需要請參考相關權威著作。</Span></P>
      <Title>版權資訊</Title>
      <P><Span>本程式中的講解文以「<A href='https://creativecommons.org/licenses/by/3.0/tw/legalcode'>CC BY 3.0 TW</A>」授權條款釋出（註：文中引用的古書內容已屬公眾領域，故不受該授權條款約束）；本程式的原始碼（除去包含講解文的部分），均釋出至公眾領域，代管在 <A href='https://notabug.org/mizusato/learn-bopomofo'>notabug.org</A>（由 Peers Community 營運）。</Span></P>
      <P><Span>本程式中的圖檔包含：使用「<A href='https://depart.moe.edu.tw/ed2400/News_Content.aspx?n=8940E5C0456177C3&sms=893AAA1CBFE149DE&s=DFBE7BE3EE0DB6AE'>教育部標準楷書</A><A href='https://creativecommons.org/licenses/by-nd/3.0/tw/legalcode'>（CC BY-ND 3.0 TW, 中華民國教育部）</A> 」字形製作的 App 圖示以及注音符號筆順圖，與講解文使用相同授權釋出；來自「<A href='https://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/'>漢語多功能字庫</A>」的小篆字圖，屬於網上公開資源。（未注明授權條款，如本程式之使用涉及侵權請<A href='https://notabug.org/mizusato/learn-bopomofo/issues'>聯繫開發者</A>）。</Span></P>
      <Pager info={props.nav_info} />
    </Content>
)


Intro.title = 'ℹ️  ＊使用方法及軟體資訊＊'


export default Intro
