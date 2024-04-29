import { FC } from 'react'
import { useParams } from 'react-router-dom'

const PostPage: FC = () => {
    const { id } = useParams()

    return <h1>Post #{id}</h1>
}

export default PostPage
