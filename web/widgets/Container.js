import g from '../styles/global'


function Container (props) {
    return (
        <div style={g('container')}>
            { props.children }
        </div>
    )
}


export default Container
