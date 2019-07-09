import { assert } from '../../tools/utility'
import Intro from './0-Intro'
import BPMF from './1-BPMF'
import AOE from './2-AOE'
import Quiz_1 from './3-Quiz-1'
import DTNL from './4-DTNL'
import IUYE from './5-IUYE'
import Quiz_2 from './6-Quiz-2'
import GKH from './7-GKH'
import AI_EI_AO_OU from './8-AI-EI-AO-OU'
import Quiz_3 from './9-Quiz-3'
import JQX from './10-JQX'
import AN_EN_ANG_ENG from './11-AN-EN-ANG-ENG'


let Chapters = [
    Intro,
    BPMF, AOE, Quiz_1,
    DTNL, IUYE, Quiz_2,
    GKH, AI_EI_AO_OU, Quiz_3,
    JQX, AN_EN_ANG_ENG
]


let Menu = Chapters.map((Chapter, i) => {
    assert(typeof Chapter.title == 'string')
    return { index: i, title: Chapter.title }
})


let Pages = (() => {
    let h = {}
    for (let i = 0; i < Chapters.length; i += 1) {
        let component = Chapters[i]
        h[String(i)] = Object.assign(props => {
            let injected = {
                nav_info: {
                    previous: ((i-1) >= 0)? (
                        { index: i-1, title: Chapters[i-1].title }
                    ): null,
                    next: ((i+1) < Chapters.length)? (
                        { index: i+1, title: Chapters[i+1].title }
                    ): null
                }
            }
            let modified_props = Object.assign({}, injected, props)
            return component(modified_props)
        }, { navigationOptions: { title: component.title } })
    }
    return h
})()


export { Menu, Pages }
