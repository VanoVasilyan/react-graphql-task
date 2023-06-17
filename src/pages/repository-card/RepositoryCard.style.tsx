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
            max-width: 230px;
            border-radius: 50%;
        }

        p{
            margin: 5px
        }

        .userName{
            font-size: 32px;
            line-height: 1.25;
        }
    }

    .repoBlock{
        max-width: 360px;
        height: 320px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .nodeInfo{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        color: dimgrey;
        font-weight: 600;   
        padding-top:10px;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
    }

    a {
       text-decoration: none;
       font-weight: bold;
       color: grey;

       &:hover{
        text-decoration: underline;
       }
    }
    
    .starBlock{
        margin-bottom:10px;
        max-width: 80px;
        & > span{
            margin: 0 10px;
        }
    }

    .usedLanguages{        
        ol{
            padding-left: 20px;
            line-height: 22px;
        }
    }
`

export { StyledRepositoryCard };