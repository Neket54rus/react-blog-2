export type Theme = 'light' | 'dark'

export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (newTheme: Theme) => void
}

export interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}
