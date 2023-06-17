import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
    query {
        search(query: "is:public", type: REPOSITORY, first: 100) {
            nodes {
                ... on Repository {
                id
                name
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
            repositoryCount
                edges {
                    node {
                    ... on Repository {
                        id
                        name
                        url
                        description
                        stargazerCount
                    }
                }
            }
        }
    }
`
