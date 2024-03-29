import { useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'
import PostBox from '../components/PostBox'
import SubredditRow from '../components/SubredditRow'
import { GET_SUBREDDITS_WITH_LIMITS } from '../graphql/queries'

const Home: NextPage = () => {
  const { data } = useQuery(GET_SUBREDDITS_WITH_LIMITS, { variables: { limit: 10 } })

  const subreddits: Subreddit[] = data?.getSubredditListLimit

  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Reddit App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostBox />
      <div className='flex'>
        <Feed />
        <div className='sticky top-36 mx-5 mt-5 hidden h-fit min-w-[360px] rounded-md border border-gray-300 bg-white lg:inline'>
          <p className='font-bold p-5'>Top Communities</p>
          <div>
            {/* List subreddits */}
            {subreddits?.map((subreddit, index) => (
              <SubredditRow key={subreddit?.id} topic={subreddit.topic} index={index} />

            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
