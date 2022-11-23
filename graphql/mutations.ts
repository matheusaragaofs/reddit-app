import { gql } from "@apollo/client";

export const ADD_POST = gql`
    mutation MyMutation(
        $body: String!
        $title: String!
        $subreddit_id: ID!
        $username: String!
        $image: String!
    ){
        insertPost(
            body: $body
            title: $title
            subreddit_id: $subreddit_id
            username: $username
            image: $image
        ) {
            id
            body
            created_at
            title
            subreddit_id
            username
            image
        }
    }
`


export const ADD_SUBREDDIT = gql`
    mutation AddSubRedditMutation($topic: String!) {
        insertSubreddit(topic : $topic) {
            id
            topic
        }
    }

`

export const ADD_COMMENT = gql`
mutation MyMutation($post_id: ID!, $username: String!, $text: String!) {
    insertComment(post_id:$post_id, text: $text, username: $username) {
        id
        created_at
        post_id
        text
        username
    }
}
`

export const ADD_VOTE = gql`
mutation MyMutation($post_id: ID!, $username: String!, $upvote: Boolean!) {
    insertVote(post_id:$post_id, upvote: $upvote, username: $username) {
        id
        created_at
        post_id
        upvote
        username
    }
}
`