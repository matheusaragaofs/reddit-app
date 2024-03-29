import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_POSTS, GET_ALL_POSTS_BY_TOPIC } from '../graphql/queries'
import Post from './Post'
import { DotPulse } from '@uiball/loaders'

type Props = {
    topic?: string
}
const Feed = ({ topic }: Props) => {
    const { data, error } = !topic ? useQuery(GET_ALL_POSTS) : useQuery(GET_ALL_POSTS_BY_TOPIC, {
        variables: {
            topic
        }
    })
    const posts: Post[] = !topic ? data?.getPostList : data?.getPostListByTopic
    if (!posts) return (<div className='h-screen flex items-center justify-center'><DotPulse /></div>)

    return (
        <div className='mt-5 space-y-4 w-full'>
            {posts?.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Feed