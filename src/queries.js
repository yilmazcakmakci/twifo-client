import { gql } from 'apollo-boost'

export const GET_USER_DATA = gql`
    query User($screen_name : String!, $oauth_token : String!, $oauth_token_secret : String!) {
        user(screen_name:$screen_name, token:$oauth_token, secret:$oauth_token_secret, ) {
            name
            screen_name
            description
            protected
            followers_count
            friends_count
            statuses_count
            created_at
            profile_image_url_https
            profile_banner_url
        }
    }
`