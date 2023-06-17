import styled from "styled-components";


const StyledRepositoryCard = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 720px;
    border: 1px solid grey;
    padding: 10px;
    margin: 10px auto;
    border-radius: 10px;
    color: white;
    overflow: hidden;

    .userInfo{
        display:flex;
        flex-direction:column;
        align-items: center;

        &>img{
            max-width: 250px;
            border-radius: 50%;
        }

        p{
            margin: 0
        }

        .userName{
            font-size: 24px;
            line-height: 1.25;
        }
    }

    .repoBlock{
        max-width: 360px;
        width: 100%;
    }

    .nodeInfo{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        color: dimgrey;
        font-weight: 600;   
    }

    a{
       text-decoration: none;
       font-weight: bold;
       color: #2970D7;

       &:hover{
        text-decoration: underline;
       }
    }
    
    .starBlock{
        max-width: 80px;
        & > span{
            margin: 0 10px;
        }
    }
`

export { StyledRepositoryCard };