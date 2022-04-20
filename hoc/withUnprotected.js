import { useRouter } from 'next/router'
import { useUser } from '../context/user'

const withUnprotected = (Pages) => {
  return (props) => {
    const router = useRouter()
    const user = useUser()
    const { uid } = user

    if (uid) {
      router.replace('/populer')
      return <></>
    }

    return <Pages {...props}/>
  }
}

export default withUnprotected