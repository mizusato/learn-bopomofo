import { create_sheet } from '../tools/sheet'


let ItemUnderlay = 'hsla(0, 0%, 85%, 0.4)'


let GlobalStyleSheet = create_sheet({
    /* Content */
    content: {
        'padding': '14 18'
    },
    p: {
        'padding': '4 0',
        'flex-direction': 'row',
        'flex-wrap': 'wrap',
        'align-items': 'flex-end'
    },
    span: {
        'font-size': 20,
        'color': 'hsl(0, 0%, 15%)'
    },
    ruby: {
        'flex-direction': 'column'
    },
    ruby_tip: {
        'font-size': 14,
        'text-align': 'center',
        'color': 'hsl(0, 0%, 30%)'
    },
    ruby_span: {
        'font-size': 20
    },
    img: {
        'width': '100%',
        'margin': '12 0'
    },
    display: {
        'flex-direction': 'row',
        'justify-content': 'center',
        'align-items': 'flex-end',
        'flex-wrap': 'wrap',
        'padding': '8 0'
    },
    d_ruby: {
        'padding': '0 0 28 0'
    },
    sub: {
        'font-size': 12
    },
    /* Pager */
    pager: {
        'padding': '12 0',
        'flex-direction': 'row',
        'overflow': 'hidden'
    },
    pager_text: {
        'font-size': 18
    },
    pager_link: {
        'color': 'hsl(233, 80%, 60%)'
    },
    pager_separator: {
        'padding': '0 6'
    },
    /* SimpleList */
    separator: {
        'height': 1,
        'width': '100%',
        'background-color': 'hsla(0, 0%, 75%, 0.7)'
    },
    /* Quiz */
    quiz: {
        'flex-grow': 1,
        'justify-content': 'center',
        'align-items': 'center'
    },
    quiz_char: {
        'font-size': 121,
        'color': 'hsl(0, 0%, 20%)'
    },
    quiz_info: {
        'flex-direction': 'row'
    },
    quiz_info_text: {
        'font-size': 18,
        'color': 'hsl(0, 0%, 40%)'
    },
    quiz_info_sep: {
        'margin': '0 8'
    },
    quiz_row: {
        'flex-direction': 'row'
    },
    quiz_option: {
        padding: '4 8'
    },
    quiz_option_text: {
        'font-size': 48,
        'color': 'hsl(0, 0%, 20%)'
    },
    /* General */
    grow: {
        'flex-grow': 1,
        'flex-shrink': 0
    },
    shrink: {
        'flex-shrink': 1,
        'flex-grow': 0
    },
    center: {
        'justify-content': 'center',
        'align-items': 'center'
    },
    big: {
        'font-size': 26
    },
    bold: {
        'font-weight': 'bold'
    },
    horizontal: {
        'flex-direction': 'row'
    }
})


export { ItemUnderlay }
export default GlobalStyleSheet
