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
                stargazers {
                        totalCount
                    }
                }
            }
        }
    }
`
