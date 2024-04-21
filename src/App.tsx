import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AboutPage, MainPage } from './pages'
import { Header } from './components'
import { useTheme } from './theme'

export const App: FC = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={`app ${theme}`}>
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
