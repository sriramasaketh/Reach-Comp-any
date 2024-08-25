import React, {useState, useEffect} from 'react'
import axios from '../utils/axios'
import Editor from '../components/Editor'

const OneboxPage = () => {
  const [threads, setThreads] = useState([])

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await axios.get('/onebox/list')
        setThreads(response.data)
      } catch (error) {
        console.error('Error fetching threads:', error)
      }
    }

    fetchThreads()
  }, [])

  const handleDelete = async threadId => {
    try {
      await axios.delete(`/onebox/${threadId}`)
      setThreads(threads.filter(thread => thread.id !== threadId))
    } catch (error) {
      console.error('Error deleting thread:', error)
    }
  }

  const handleReply = threadId => {}

  return (
    <div className='p-4'>
      <h1 className='text-2xl mb-4'>Onebox</h1>
      <ul>
        {threads.map(thread => (
          <li key={thread.id} className='mb-2 p-2 border rounded'>
            <div>{thread.subject}</div>
            <div className='flex justify-between mt-2'>
              <button
                onClick={() => handleDelete(thread.id)}
                className='text-red-500'
              >
                Delete
              </button>
              <button
                onClick={() => handleReply(thread.id)}
                className='text-blue-500'
              >
                Reply
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Editor />
    </div>
  )
}

export default OneboxPage
