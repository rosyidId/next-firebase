import '../styles/globals.css'
import AuthStateChangeProvider from '../context/auth'
import { UserProvider } from '../context/user'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <AuthStateChangeProvider >
        <Component {...pageProps} />
      </AuthStateChangeProvider>
    </UserProvider>
  )
}

export default MyApp
