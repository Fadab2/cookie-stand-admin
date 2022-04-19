import { useState } from 'react';
import { useAuth } from '../auth/auth';

export default function LoginForm({ onLogin }) {

  function handleSubmit(event) {
      event.preventDefault();

      onLogin(event.target.username.value, event.target.password.value)
    }

    return (
      <div className="flex justify-center text-center bg-emerald-300 border-emerald-500">
      <form onSubmit={handleSubmit} >
      <div>
          <label className="m-2 mt-0 font-bold text-center " htmlFor="username">USER NAME</label>
          <input className="w-full p-2 m-2 mx-auto" type="text" name="username" placeholder="User Name"></input>
          
          <label className="m-2 mt-5 font-bold text-center" htmlFor="password">PASSWORD</label>
          <input className="w-full p-2 m-2 mx-auto " type="password" name="password" placeholder="Password"></input>

          <button className="w-full p-4 mx-auto mt-12 rounded bg-emerald-500">SIGN IN</button>
        </div>
  
      </form>
      
      </div>
    )
}