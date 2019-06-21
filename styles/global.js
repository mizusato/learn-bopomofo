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
    display: {
        'flex-direction': 'row',
        'justify-content': 'center',
        'align-items': 'flex-end'
    },
    span: {
        'font-size': 18,
        'color': 'hsl(0, 0%, 15%)'
    },
    /* Ruby */
    ruby: {
        'flex-direction': 'column'
    },
    tip: {
        'font-size': 12,
        'text-align': 'center',
        'color': 'hsl(0, 0%, 30%)'
    },
    /* SimpleList */
    separator: {
        'height': 1,
        'width': '100%',
        'background-color': 'hsla(0, 0%, 75%, 0.7)'
    },
    /* General */
    grow: {
        'flex': 1
    },
    center: {
        'justify-content': 'center',
        'align-items': 'center'
    },
    big: {
        'font-size': 20
    },
    bold: {
        'font-weight': 'bold'
    }
})


export { ItemUnderlay }
export default GlobalStyleSheet
