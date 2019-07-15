import ErrorPage from 'next/error'
import Head from '../widgets/Head'
import Container from '../widgets/Container'

import Intro from '../compatible/tutorial/0-Intro'
import BPMF from '../compatible/tutorial/1-BPMF'
import AOE from '../compatible/tutorial/2-AOE'
import DTNL from '../compatible/tutorial/4-DTNL'
import IUYE from '../compatible/tutorial/5-IUYE'
import GKH from '../compatible/tutorial/7-GKH'
import AI_EI_AO_OU from '../compatible/tutorial/8-AI-EI-AO-OU'
import JQX from '../compatible/tutorial/10-JQX'
import AN_EN_ANG_ENG from '../compatible/tutorial/11-AN-EN-ANG-ENG'
import ZCS from '../compatible/tutorial/13-ZCS'
import ZH_CH_SH_R_ER from '../compatible/tutorial/14-ZH-CH-SH-R-ER'

const Chapters = [
    Intro,
    BPMF, AOE,
    DTNL, IUYE,
    GKH, AI_EI_AO_OU,
    JQX, AN_EN_ANG_ENG,
    ZCS, ZH_CH_SH_R_ER,
]


function Tutorial (props) {
    if (props._404) {
        return <ErrorPage statusCode={404} />
    }
    let i = props.index
    let Chapter = Chapters[i]
    let nav_info = {
        previous: (i > 0)? {
            index: i-1,
            title: Chapters[i-1].title
        }: null,
        next: (i < Chapters.length-1)? {
            index: i+1,
            title: Chapters[i+1].title
        }: null
    }
    let title = Chapter.title.replace('📙 ', '')
    return (
        <Container>
            <Head title={title} />
            <h2>{title}</h2>
            <Chapter nav_info={nav_info} />
        </Container>
    )
}


Tutorial.getInitialProps = async ctx => {
    let i = Number(ctx.query.index)
    if (typeof Chapters[i] == 'undefined') {
        if (ctx && ctx.res) {
            ctx.res.writeHead(404)
        }
        return { _404: true }
    } else {
        return { index: i }
    }
}


export { Chapters }
export default Tutorial
