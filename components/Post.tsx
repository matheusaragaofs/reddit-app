import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid'
import React from 'react'

type Props = {
    post: Post
}
const Post = ({ post }: Props) => {
    return (
        <div>
            {/* Votes */}
            <div className='flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400'>
                <ArrowUpIcon  className='voteButtons hover:text-red-400'/>
                <p className='text-xs font-bold text-black'>0</p>
                <ArrowDownIcon className='voteButtons hover:text-blue-400'/>
            </div>


            <div>
                {/* Header */}
                <div>

                </div>
                {/* Body */}
                {/* Image */}
                {/* Footer */}
            </div>
        </div>
    )
}

export default Post