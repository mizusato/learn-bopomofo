import Link from 'next/link'
import g from '../styles/global'


function Footer (props) {
    return (
        <div>
          <hr style={g('footer_hr')} />
          <footer style={g('footer')}>
            <p style={g('footer_text')}>
              Compiled by Sinograph Studio, 
              Released with <a style={g('footer_text','footer_link')} href="https://creativecommons.org/licenses/by/3.0/tw/legalcode" target="_blank">CC-BY 3.0 TW</a> License (except contents of ancient books).
            </p>
          </footer>
        </div>
    )
}


export default Footer
