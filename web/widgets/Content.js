import React from 'react'
import { merge_style } from '../tools/sheet'
import g from '../styles/global'


let Content = props => (
    <div style={merge_style(g('content'), props)} >
        { props.children }
    </div>
)


let P = props => (
    <p style={merge_style(g('p'), props)}>
        { props.children }
    </p>
)


let Span = props => (
    <span style={merge_style(g('span'), props)} >
        { props.children }
    </span>
)


let A = props => (
    <a href={props.href} target="_blank" style={merge_style(g('a'), props)} >
        { props.children }
    </a>
)


let Bold = props => (
    <Span style={merge_style(g('bold'), props)}>
        { props.children }
    </Span>
)


let Title = props => (
    <h3 style={merge_style({}, props)}>
        <Span style={merge_style({}, { style: props.spanStyle })}>
            { props.children }
        </Span>
    </h3>
)


let Ruby = props => {
    let tip_style = merge_style (
        g('ruby_tip'),
        { style: props.tipStyle, color: props.color }
    )
    let span_style = merge_style (
        g('ruby'),
        { style: props.spanStyle, color: props.color }
    )
    return (
        <ruby style={merge_style(g('ruby'), props)} >
            <span style={span_style} >
                { props.children }
            </span>
            <rp style={tip_style}>（</rp>
            <rt style={tip_style}>{ props.tip }</rt>
            <rp style={tip_style}>）</rp>
        </ruby>
    )
}


let Sub = props => (
    <span style={merge_style(g('sub'), props)}>
        { props.children }
    </span>
)


let Img = props => (
    <div style={g('img_wrapper', 'center')} >
        <img style={g('img')} src={props.src} />
    </div>
)


let Display = props => (
    <div style={merge_style(g('display', 'center'), props)}>
        <div>
            { props.children }
        </div>
    </div>
)


export { Content, P, Span, A, Bold, Title, Ruby, Sub, Img, Display }
