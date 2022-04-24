import Link from "next/link"
export default function Header({ user, logout }) {
    return (
        <header className='flex items-center justify-around p-3 bg-emerald-400'>
        <h1 className='text-2xl font-bold'>Cookie Stand Admin</h1>
      <div className="flex items-center ">
          <span className="p-5 py-3 rounded bg-green-50 ">{user}</span>
          <nav>
            <Link href="/component/LoginForm">
                 <a onClick={logout} className="py-1 pl-3 pr-3 m-2 text-white rounded text-sl bg-emerald-600">Sign Out</a>
            </Link>

        </nav>
           
            <Link href='/overview'>
            
              <a><button className="pr-2 bg-white rounded ">Overview</button></a>
            </Link>
          </div>
      </header>
    )
}