import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
    query {
        search(query: "is:public", type: REPOSITORY, first: 100) {
            nodes {
                ... on Repository {
                id
                name
                nameWithOwner
                description
                url
                stargazerCount
                lastCommentDate: updatedAt
            }
            }
        }
    }
`

export const GET_SEARCH_REPOSITORIES = `
    query($queryString: String!) {
        search(query: $queryString, type: REPOSITORY, first: 100) {
                edges {
                    node {
                    ... on Repository {
                        id
                        name
                        nameWithOwner
                        url
                        description
                        stargazerCount
                        lastCommentDate: updatedAt
                    }
                }
            }
        }
    }
`
export const GET_REPOSITORY_INFO = `
    query($login: String!) {
        user(login: $login) {
            login
            name
            bio
            email
            location
            websiteUrl
            avatarUrl
            followers {
                totalCount
            }
            repositories(first: 5) {
                totalCount
                nodes {
                name
                description
                url
                }
            }
        }
    },
`

export const GET_USED_LANGUAGES = `
    query($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
        languages(first: 10) {
            edges {
            node {
                name
            }
            }
        }
       }
    }
`