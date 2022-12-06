import Head from 'next/head'

// <head> tag metadata, there are defaults in _app.jsx,
// but you can change some through this component.
export default function HeadMeta({ title, description }) {
    return (
      <Head>
        { title &&
          <>
            <title>{title + ' - codcsclub.com'}</title>
            <meta content={title + ' - codcsclub.com'} property="og:title" />
      
          </>
        }
        { description &&
          <meta content={description} property="og:description" />
        }
      </Head>
    )
  }