import { FC } from 'react'

import { AppRouter } from './providers/router'

import { useTheme } from '@/shared/config/theme'
import { classNames } from '@/shared/lib/classNames'
import { Header } from '@/widgets/Header'

export const App: FC = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change Theme</button>
            <Header />
            <AppRouter />
        </div>
    )
}
