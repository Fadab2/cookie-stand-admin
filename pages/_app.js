import 'tailwindcss/tailwind.css'
import { AuthProvider } from '../contexts/auth.js'

function MyApp({ Component, pageProps }) {
    return <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>

}

export default MyApp

// import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp

