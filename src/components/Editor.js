import React from 'react'

const Editor = () => {
  return (
    <div className='border p-4 rounded'>
      <textarea className='w-full h-48 p-2 border rounded'></textarea>
      <div className='flex justify-between mt-2'>
        <button className='px-4 py-2 bg-green-500 text-white rounded'>
          Save
        </button>
        <button className='px-4 py-2 bg-gray-500 text-white rounded'>
          Variables
        </button>
      </div>
    </div>
  )
}

export default Editor
