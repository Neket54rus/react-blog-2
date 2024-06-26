import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage: FC = () => {
    const { t } = useTranslation('mainPage')

    return (
        <div>
            <h1>{t('Главная страница')}</h1>
        </div>
    )
}

export default MainPage
