import { useTranslation } from 'react-i18next'
import { FC, memo } from 'react'

import { Button } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'

import { LanguageSwitcherProps } from '../props/languageSwitcher'

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(({ className }) => {
	const { t, i18n } = useTranslation()

	const reverseLanguage = i18n.language === 'ru' ? 'en' : 'ru'

	const switchLanguage = () => {
		i18n.changeLanguage(reverseLanguage)
	}

	return (
		<Button className={className} onClick={switchLanguage}>
			<Text text={t('Язык')} size='m' weight='normal' />
		</Button>
	)
})

LanguageSwitcher.displayName = 'LanguageSwitcher'
