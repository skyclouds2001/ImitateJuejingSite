import React, { createContext, useEffect, useState } from 'react'
import { Theme } from '@/enum'

interface IThemeContextProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<IThemeContextProps>({} as IThemeContextProps)

export const ThemeContextProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

  // 监听本地缓存来同步不同页面间的主题
  useEffect(() => {
    const updateTheme = () => {
      const item = (localStorage.getItem('theme') as Theme) || Theme.LIGHT
      setTheme(item)
      document.documentElement.dataset.theme = item
    }

    updateTheme()

    window.addEventListener('storage', updateTheme)
    return () => {
      window.removeEventListener('storage', updateTheme)
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: (currentTheme) => {
          setTheme(currentTheme)
          document.documentElement.dataset.theme = currentTheme
          localStorage.setItem('theme', currentTheme)
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
