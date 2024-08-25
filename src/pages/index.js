import React from 'react'
import {useRouter} from 'next/router'
import Button from '../components/Button'

const IndexPage = () => {
  const router = useRouter()

  const handleLogin = () => {
    router.push('/login')
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  )
}

export default IndexPage
