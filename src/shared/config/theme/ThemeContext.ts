// TODO: Придумать куда можно перенести этот файл

import { createContext } from 'react'

import { ThemeContextProps } from './types/theme'

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
