import { create_sheet } from '../tools/sheet'


let ItemUnderlay = 'hsla(0, 0%, 85%, 0.8)'


let GlobalStyleSheet = create_sheet({
    item: {
        padding: '8 16'
    },
    separator: {
        height: 1,
        width: '100%',
        'background-color': 'hsla(0, 0%, 75%, 0.8)'
    },
    black: {
        color: 'black'
    },
    grow: {
        flex: 1
    },
    center: {
        'justify-content': 'center',
        'align-items': 'center'
    }
})


export { ItemUnderlay }
export default GlobalStyleSheet
