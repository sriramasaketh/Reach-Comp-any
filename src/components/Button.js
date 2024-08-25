import React from 'react'

const Button = ({children, onClick, className}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-semibold text-white bg-blue-500 rounded ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
