import { FC, memo, useMemo } from 'react'

import { Button } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { useTheme } from '@/shared/config/theme'
import LightIconTheme from '@/shared/assets/icons/themeLight.svg'
import DarkIconTheme from '@/shared/assets/icons/themeDark.svg'

import { ThemeSwitcherProps } from '../types/themeSwitcher'

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
	const { theme, toggleTheme } = useTheme()

	const themeButton = useMemo(
		() => <Icon Icon={theme === 'light' ? DarkIconTheme : LightIconTheme} width='32px' />,
		[theme],
	)

	return (
		<Button className={className} onClick={toggleTheme}>
			{themeButton}
		</Button>
	)
})

ThemeSwitcher.displayName = 'ThemeSwitcher'
