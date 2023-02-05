export type Themes = 'light' | 'dark'

export interface IThemeContextProps {
  theme: Themes
  setTheme: (theme: Themes) => void
}

export interface IProps {
  children: JSX.Element
}
