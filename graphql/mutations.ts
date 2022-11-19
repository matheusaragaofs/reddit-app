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