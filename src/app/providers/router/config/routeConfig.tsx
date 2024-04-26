import { RouteProps } from 'react-router-dom'

import { AppRoutes } from '../types/routeConfigTypes'

import { AboutPage } from '@/pages/AboutPage'
import { MainPage } from '@/pages/MainPage'

export const routePaths: Record<AppRoutes, string> = {
    main: '/',
    about: 'about',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    main: {
        path: routePaths.main,
        element: <MainPage />,
    },
    about: {
        path: routePaths.about,
        element: <AboutPage />,
    },
}
