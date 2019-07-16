import { create_sheet } from '../tools/sheet'


let GlobalStyleSheet = create_sheet({
    container: {
        'padding': '0.5rem calc(18*2.8*(100vw/1336))',
        'max-width': '600px',
        'width': '100%',
        'min-height': '100vh',
        'background-color': 'hsl(0, 0%, 99%)',
        'overflow': 'hidden',
        'box-shadow': '0px 0px 5px hsl(0, 0%, 60%)'
    },
    /* Content */
    content: {
        'overflow': 'hidden'
    },
    p: {},
    span: {
        'font-size': 20,
        'color': 'hsl(0, 0%, 25%)'
    },
    a: {
        'color': 'hsl(233, 80%, 60%)',
        'text-decoration': 'none'
    },
    ruby: {},
    ruby_span: {},
    ruby_tip: {
        'font-size': '0.8rem'
    },
    img_wrapper: {
        'margin': '1rem 0rem'
    },
    img: {
        'max-width': '100%'
    },
    display: {},
    d_ruby: {
        'padding': '0.2rem 0rem 0.6rem 0rem'
    },
    sub: {
        'font-size': '0.7rem'
    },
    /* Pager */
    pager: {
        'padding': '0.5rem 0rem 1.5rem 0rem',
        'overflow': 'hidden',
        'white-space': 'nowrap',
        'text-overflow': 'ellipsis',
    },
    pager_text: {
        'font-size': '1.1rem'
    },
    pager_link: {
        'color': 'hsl(233, 80%, 60%)',
        'cursor': 'pointer'
    },
    pager_separator: {
        'padding': '0rem 0.5rem'
    },
    /* List */
    list_item: {
        'margin': '0.5rem 0rem'
    },
    /* Footer */
    footer: {       
        'display': 'flex',
        'justify-content': 'center',
        'margin-bottom': '0.2rem'
    },
    footer_hr: {
        'margin-top': '2.5rem',
        'color': 'hsl(0, 0%, 90%)'
    },
    footer_text: {
        'color': 'hsl(0, 0%, 35%)',
        'font-size': '0.7rem'
    },
    footer_link: {
        'text-decoration': 'none'
    },
    /* General */
    center: {
        'display': 'flex',
        'justify-content': 'center',
    },
    bold: {
        'font-weight': 'bold'
    }
})


export default GlobalStyleSheet
