import Cookies from 'js-cookie'
import { ElementType, useEffect } from 'react'

export default function withAuth(WrappedComponent) {
  const Wrapper = (props) => {

    useEffect(() => {
      const token = Cookies.get('token')

      if (!token) {
        console.log('rota')
      }
    }, [])

    return <WrappedComponent {...props} />
  }

  return Wrapper
}
