import { useContext } from 'react'

import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../ThemeContext'
import { UseThemeResult } from '../types'

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme,
    }
}
