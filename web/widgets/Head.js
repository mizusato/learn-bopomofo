import Head from 'next/head'


function HeadBoilerplate (props) {
    return (
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <title>{ props.title }</title>
          <style>
            {'html { font-size: 18px; font-family: sans-serif; }'}
            {'body { width: 100%; margin: 0px; padding: 0px; }'}
            {'#__next { width: 100%; margin: 0px; padding: 0px; }'}
            {'#__next { display: flex; justify-content: center; }'}
            {'#__next { background-color: hsla(50, 80%, 90%, 0.8); }'}
          </style>
        </Head>
    )
}


export default HeadBoilerplate
