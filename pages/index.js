import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from './components/Banner'
import Header from './components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MISTRI 1.0</title>
      </Head>
      
      <Header />

      <main className='max-w-screen-2xl ms-auto'>
        <Banner/>
      </main>
      
    </div>
    
  )
}