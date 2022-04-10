import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Forms from '../components/Forms'
import Table from '../components/Table'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>cookie stand admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        < Header />
      <main className="">
        < Forms />
       
      
        < Table />
      </main>
      < Footer />
        
    </div>
  )
}

export default Home
