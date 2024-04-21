import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AboutPage, MainPage } from './pages'
import { Header } from './components'

export const App: FC = () => {
    return (
        <div>
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
