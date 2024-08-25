import {useEffect, useState} from 'react'

const useDarkMode = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(theme === 'light' ? 'dark' : 'light')
    root.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return [theme, toggleTheme]
}

export default useDarkMode
