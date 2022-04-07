import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

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
        <div className='justify-center bg-emerald-200'>
        <legend className='flex items-center text-xl'>Create Cookie Stand</legend>
        <form className='flex my-4 bg-emerald-200'>
          
            <label> <div className="mt-1.5">Location</div> 
              <input type="text"/>
            </label>
         
             <label><span className="text-sl">Minimum Customers per Hour</span>
              <input type="number"
               />
            </label>
            <label><span className="text-sl">Maximum Customers per Hour</span>
              <input type="number"
               />
            </label>
              <label><span className="text-sl">Average Cookies per Sale</span>
              <input type="number"
               />
            </label>
          <button className="flex items-center justify-between p-4 bg-emerald-500">Create</button>
          </form>
        </div>
        <table className='w-1/2 mx-auto my-4'>
          <thead>
            <tr>
              <th className='border-gray-700'>Minimum Customers per Hour</th>
              <th className='border-gray-700'>Maximum Customers per Hour</th>
              <th className='border-gray-700'>Average Cookies per Sale</th>
            </tr>
          </thead>
          <tbody>
            <td className='pl-2 border border-gray-700'>2</td>
            <td className='pl-2 border border-gray-700'>4</td>
            <td className='pl-2 border border-gray-700'>2.5</td>
          </tbody>
        </table>
      </main>

      <footer className="flex items-center justify-between p-4 bg-emerald-500">
       <p> &copy;2022</p>
      </footer>
    </div>
  )
}

export default Home
