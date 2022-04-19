import Head from 'next/head'
import Header from '../components/Header'
import CreateForm from '../components/CreateForm'
import Footer from '../components/Footer'
import Table from '../components/ReportTable'
import { hours } from "../data/fakeData"
import { useState } from 'react'

export default function Home() {

  const [reports, setStoreReports] = useState([]);


  function handleReport(report) {
    setStoreReports([...reports, report]);

  }


  return (
    <div>
     
      <Head />
      <Header />
      <main>
        <CreateForm handleReport={handleReport} hours={hours} />
        <Table hours={hours} reports={reports} />
      </main>
      <Footer reports={reports} />

    </div>
  )
}