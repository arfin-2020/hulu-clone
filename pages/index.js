import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
        <Header/>
        <Navbar/>
    </div>
  )
}
