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
        h[String(i)] = Chapters[i]
    }
    return h
})()


export { Menu, Pages }
