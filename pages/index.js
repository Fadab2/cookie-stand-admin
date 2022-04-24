import axios from 'axios'
import CookieStandAdmin from '../components/CookieStandAdmin'
import { hours } from "../data/fakeData"
import LogingForm from '../components/LoginForm'
import { useState } from 'react'
import { useAuth } from '../contexts/auth'

export default function Home() {

  const { user, login, logout } = useAuth();

  const [userName, setUserName] = useState();
  async function handleLogin(username, password) {
     
    setUserName(username)
    login(username, password)
  }
  
  function handleLogout() {
    logout()
    setUserName(false)
  }

  return (
    <div>
    
      <main>
        
        {userName ? < CookieStandAdmin user={userName} logout={handleLogout} />  : <LogingForm onLogin={handleLogin}/>}
      </main>

    </div>
  )
}