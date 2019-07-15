import React from 'react'
import Link from 'next/link'
import g from '../styles/global'

const TUTORIAL = name => `/tutorial?index=${encodeURIComponent(name)}`


function Pager (props) {
    if (props.info == null) {
        return <div></div>
    }
    return (
        <div style={g('pager')}>
            { (props.info.previous != null)? (
                <span>
                    <Link href={TUTORIAL(props.info.previous.index)}>
                        <span style={g('pager_text', 'pager_link')}>
                            上一節
                        </span>
                    </Link>
                    <span style={g('pager_text', 'pager_separator')}>
                        |
                    </span>
                </span>
            ): <span></span> }
            { (props.info.next != null)? (
                <span>
                    <Link href={TUTORIAL(props.info.next.index)}>
                        <span style={g('pager_text', 'pager_link')} >
                            <span>下一節：</span>
                            <span>{props.info.next.title}</span>
                        </span>
                    </Link>
                </span>
            ): <span style={g('pager_text')}>THE END</span> }
        </div>
    )
}


export default Pager
