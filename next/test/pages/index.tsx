import type { NextPage } from 'next'
import Head from 'next/head'
import EffectComponent from '../components/EffectComponent'
import StateComponent from '../components/StateComponent'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Text Next App</title>
        <meta name="description" content="Test App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <StateComponent />
        <EffectComponent />
      </main>
    </div>
  )
}

export default Home
