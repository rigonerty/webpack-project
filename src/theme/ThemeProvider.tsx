import { ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps } from './ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface props{
    children: ReactNode
}


export const ThemeProvider = ({children}:props) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    // const toggleTheme = ()=>{
    //     const newTheme = theme==Theme.LIGHT? Theme.DARK : Theme.LIGHT;
    //     setTheme(newTheme);
    //     localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    // }

    const defaultProps = useMemo<ThemeContextProps>(()=>({
        theme,
        setTheme,
    }), [theme])
  return (
    <ThemeContext.Provider value={defaultProps}>
        {children}
    </ThemeContext.Provider>
  )
}
