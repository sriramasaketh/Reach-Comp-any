import React from 'react'
import {useRouter} from 'next/router'
import Button from '../components/Button'

const LoginPage = () => {
  const router = useRouter()

  const handleGoogleLogin = () => {
    router.push('/google-login')
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h2 className='text-2xl mb-4'>Login</h2>
      <Button onClick={handleGoogleLogin}>Login with Google</Button>
    </div>
  )
}

export default LoginPage
