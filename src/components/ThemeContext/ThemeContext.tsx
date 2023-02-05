import React, { useState, useEffect, createContext } from 'react'
import { IThemeContextProps, IProps, Themes } from '@/interface/theme'

export const ThemeContext = createContext<IThemeContextProps>({} as IThemeContextProps)

export const ThemeContextProvider = ({ children }: IProps): JSX.Element => {
  const [theme, setTheme] = useState<Themes>('light')

  // 监听本地缓存来同步不同页面间的主题
  useEffect(() => {
    const checkTheme = (): void => {
      const item = (localStorage.getItem('theme') as Themes) || 'light'
      setTheme(item)
      document.getElementsByTagName('html')[0].dataset.theme = item
      if (item === 'light') document.body.style.backgroundColor = '#F4F5F5'
      else document.body.style.backgroundColor = '#121212'
    }
    checkTheme()
    // 对本地存储监听
    window.addEventListener('storage', checkTheme)
    // 撤销监听
    return (): void => {
      window.removeEventListener('storage', checkTheme)
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: (currentTheme): void => {
          setTheme(currentTheme)
          localStorage.setItem('theme', currentTheme)
          document.getElementsByTagName('html')[0].dataset.theme = currentTheme
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
