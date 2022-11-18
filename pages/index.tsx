import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='h-screen bg-black w-30'>t</div>
      <div className='h-screen bg-red-500 w-30'>t</div>
    </div> 
  )
}

export default Home
