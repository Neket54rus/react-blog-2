import { FC } from 'react'

import { useTheme } from '@/shared/config/theme'
import { classNames } from '@/shared/lib/classNames'
import { Header } from '@/widgets/Header'

import { AppRouter } from './providers/router'

export const App: FC = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Header />
            <AppRouter />
        </div>
    )
}
