import '@/styles/globals.css'
import Layout from './layaout'

export default function App({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
