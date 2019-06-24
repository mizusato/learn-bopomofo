import { assert } from '../../tools/utility'
import Intro from './0-Intro'
import BPMF from './1-BPMF'
import AOU from './2-AOU'
import Quiz_1 from './3-Quiz-1'


let Chapters = [ Intro, BPMF, AOU, Quiz_1 ]

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
