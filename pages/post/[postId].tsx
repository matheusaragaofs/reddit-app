import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'
import Post from '../../components/Post'
import { GET_POST_BY_POST_ID } from '../../graphql/queries'

const PostPage = () => {
    const router = useRouter()
    const post_id = router.query.postId
    const { data } = useQuery(GET_POST_BY_POST_ID, {
        variables: {
            post_id
        }
    })
    const post: Post = data?.getPostListByPostId
    console.log('post:', post)
    return (
        <div>
            <Post post={post} />
        </div>
    )
}

export default PostPage