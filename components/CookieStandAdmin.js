import Head from 'next/head'
import Header from '../components/Header'
import CreateForm from '../components/CreateForm'
import Footer from '../components/Footer'
import Table from '../components/ReportTable'
import { hours } from "../data/fakeData"

import { useState } from 'react'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'

export default function CookieStandAdmin({ user, logout }) {
    

//   const { user, login, logout } = useAuth();
//       function handleReport(report) {
//     setStoreReports([...reports, report]);
//   }
    const { resources, deleteResource } = useResource();
    const reports = resources? resources.length : 0


  return (
    <div>
     
      <Head user={user} logout={logout}/>
      <Header />
      <main>
        <CreateForm/>
        <Table hours={resources || []} deleteStand={deleteResource} />
          </main>
          
      <Footer reports={reports} />

    </div>
  )
}