import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import axios from '../utils/axios'
import Button from '../components/Button'

const GoogleLoginPage = () => {
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = true
    if (isLoggedIn) {
      router.push('/onebox')
    }
  }, [router])

  const handleGoogleLogin = async () => {
    try {
      const response = await axios.post('/auth/google-login')
      console.log('Google login response:', response.data)

      if (response.data.success) {
        localStorage.setItem('token', response.data.token)

        router.push('/onebox')
      } else {
        console.error('Login failed:', response.data.message)
      }
    } catch (error) {
      console.error('Error during Google login:', error)
    }
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h2 className='text-2xl mb-4'>Google Login</h2>
      <Button onClick={handleGoogleLogin}>Login with Google</Button>
    </div>
  )
}

export default GoogleLoginPage
