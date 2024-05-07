import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

const PostPage: FC = () => {
	const { id } = useParams()
	const { t } = useTranslation('postPage')

	return (
		<h1>
			{t('Пост')} #{id}
		</h1>
	)
}

export default PostPage
