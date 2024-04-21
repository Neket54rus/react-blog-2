import { FC } from 'react'
import { Link } from 'react-router-dom'

import * as styles from './Header.module.scss'

const pages = [
    { name: 'Main', path: '/' },
    { name: 'About', path: '/about' },
]

export const Header: FC = () => {
    const links = pages.map((page) => (
        <Link key={page.path} to={page.path}>
            {page.name}
        </Link>
    ))

    return <div className={styles.Header}>{links}</div>
}
