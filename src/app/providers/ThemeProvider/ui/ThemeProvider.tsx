import { FC, PropsWithChildren, useMemo, useState } from 'react'

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '@/shared/config/theme'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>((localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || 'light')

	const providerValue = useMemo(() => ({ theme, setTheme }), [theme])

	return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>
}
