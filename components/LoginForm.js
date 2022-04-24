export default function LoginForm({ onLogin }) {

  function handleSubmit(event) {
      event.preventDefault();

      onLogin(event.target.user.value, event.target.password.value)
    }

    return (
      <div className="flex justify-center py-10 mx-40 my-40 text-2xl text-center border-2 border-emerlard-400 rounded-2xl bg-emerald-200 border-emerald-500" >
      <form  onSubmit={handleSubmit} >
      <div>
          <label className="m-20 font-bold text-center " htmlFor="user">USER NAME</label>
          <input className="w-full p-2 m-2 mx-auto" type="text" name="user" placeholder="User Name" required></input>
          
          <label className="m-10 mt-5 font-bold text-center" htmlFor="password">PASSWORD</label>
          <input className="w-full p-2 m-2 mx-auto " type="password" name="password" placeholder="password" required></input>

          <button className="w-full p-4 mx-auto mt-12 rounded bg-emerald-500">SIGN IN</button>
        </div>
  
      </form>
      
      </div>
    )
}