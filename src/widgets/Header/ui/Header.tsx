import { FC, memo } from 'react'

import { useTheme } from '@/shared/config/theme'
import { Icon } from '@/shared/ui/Icon'
import { Section } from '@/shared/ui/Section'
import { classNames } from '@/shared/lib/classNames'
import { Link } from '@/shared/ui/Link'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher'
import Logo from '@/shared/assets/icons/logo.svg'
import GithubIcon from '@/shared/assets/icons/github.svg'

import { HeaderProps } from '../types/header'

import * as classes from './Header.module.scss'

export const Header: FC<HeaderProps> = memo(({ className }) => {
    const { theme } = useTheme()

    return (
        <header className={classNames(classes.Header, {}, [className])}>
            <Section>
                <nav className={classes.Navbar}>
                    <Link to='/' width='80px'>
                        <Logo />
                    </Link>
                    <div className={classes.NavbarLeft}>
                        <ThemeSwitcher />
                        <LanguageSwitcher />
                        <Link to='https://github.com/Neket54rus' target='_blank' width='48px' height='48px' hover>
                            <Icon Icon={GithubIcon} width='32px' height='32px' theme={theme} />
                        </Link>
                    </div>
                </nav>
            </Section>
        </header>
    )
})

Header.displayName = 'Header'
