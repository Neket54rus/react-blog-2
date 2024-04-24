import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useTheme } from '@/shared/config/theme'
import { classNames } from '@/shared/lib/classNames'
import { Header } from '@/widgets/Header'
import { MainPage } from '@/pages/MainPage'
import { AboutPage } from '@/pages/AboutPage'

export const App: FC = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change Theme</button>
            <Header />
            <Routes>
                <Route
                    path='/'
                    element={
                        <Suspense fallback='Loading Main Page...'>
                            <MainPage />
                        </Suspense>
                    }
                />
                <Route
                    path='/about'
                    element={
                        <Suspense fallback='Loading About Page...'>
                            <AboutPage />
                        </Suspense>
                    }
                />
            </Routes>
        </div>
    )
}
