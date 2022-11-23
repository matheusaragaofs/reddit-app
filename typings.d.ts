type PostComment = {
    id: number
    text: string
    post_id: number
    username: string
    created_at: string
}

type Vote = {
    created_at: string
    id: number
    post_id: number
    upvote: boolean
    username: string
}

type Subreddit = {
    created_at: string
    id: number
    topic: string
}

type Post = {
    body: string
    created_at: string
    id: number
    image: string
    title: string
    subreddit_id: number
    title: string
    username: string
    votes: Vote[]
    comments: PostComment[]
    subreddit: Subreddit[]
}
