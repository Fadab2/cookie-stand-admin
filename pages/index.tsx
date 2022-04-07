import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>cookie stand admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='flex items-center justify-between p-4 bg-emerald-500'>
        <h1 className='text-4xl'>Cookie Stand Admin</h1>
      </header>
      <main className="">
        <div className='bg-emerald-200'>
        <legend className='flex items-center text-xl'>Create Cookie Stand</legend>
        <form className='flex my-4 bg-emerald-200'>
          
            <label className="flex">Location
              <input type="text"/>
            </label>
         
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              Minimum Customers per Hour
            </label>
            <label><span className="text-sm text-center">Maximum Customers per Hour</span>
              <input type="number"
               />
            </label>
          <input name="create"></input>
          <button className="flex items-center justify-between p-4 bg-emerald-500">Create</button>
          </form>
          </div>
      </main>

      <footer className="flex items-center justify-between p-4 bg-emerald-500">
       <p> &copy;2022</p>
      </footer>
    </div>
  )
}

export default Home
