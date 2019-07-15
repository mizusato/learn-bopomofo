import Link from 'next/link'
import Head from '../widgets/Head'
import Container from '../widgets/Container'
import About from '../compatible/tutorial/00-About'
import { Chapters } from './tutorial'
import g from '../styles/global'


function Index (props) {
    return (
        <Container>
          <Head title='注音符號教學' />
            <h1>注音符號教學</h1>
            <h3>目錄</h3>
            <ol>
              { Chapters.map((c, i) => (
                  <li key={i} style={g('list_item')}>
                    <Link href={`/tutorial?index=${i}`} >
                      <a style={g('span', 'a')} target="_blank" >
                        { c.title.replace('📙 ', '') }
                      </a>
                    </Link>
                  </li>
              )) }
            </ol>
            <About nav_info={null} />
        </Container>
    )
}


export default Index
