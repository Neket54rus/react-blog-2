import { RouteProps } from 'react-router-dom'

import { MainPage } from '@/pages/MainPage'
import { PostPage } from '@/pages/PostPage'

import { AppRoutes } from '../types/routeConfigTypes'

export const routePaths: Record<AppRoutes, string> = {
    main: '/',
    post: 'posts/:id',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    main: {
        path: routePaths.main,
        element: <MainPage />,
    },
    post: {
        path: routePaths.post,
        element: <PostPage />,
    },
}
