import { useSession } from 'next-auth/react'
import React from 'react'
import Avatar from './Avatar'

const PostBox = () => {
    const { data: session } = useSession()
    return (
        <form action="" className='sticky top-0'>
            <div className='flex items-center space-x-3'>
                {/* Avatar */}
                <Avatar/>
                <input
                    disabled={!session}
                    className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
                    type="text" placeholder={session ? 'Create a post by entering a title' : "Sign in to post"} />
            </div>
        </form>
    )
}

export default PostBox