import Link from 'next/link'
import Head from '../widgets/Head'


function Index (props) {
    return (
        <div>
          <Head title='注音符號教學' />
          <h1>CHANGE THE WORLD</h1>
          <Link href="/tutorial?index=1"><a>Test</a></Link>
        </div>
    )
}


export default Index
