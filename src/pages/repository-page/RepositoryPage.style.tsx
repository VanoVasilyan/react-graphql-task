import styled from "styled-components";


const StyledRepositoryPage = styled.div`
   & .child{
    display: flex;
    flex-wrap: wrap;      
    }
    .pagination {
        display: flex;
        justify-content: center;
        list-style: none;
        padding: 0;
        position: fixed;
        bottom: 2%;
        left: 40%;
    }
    
    .pagination li {
        display: inline-block;
        margin: 0 5px;
    }
    
    .pagination a {
        cursor: pointer;
        padding: 5px 10px;
        text-decoration: none;
        color: #1C70D7;
    }
    
    .pagination a:hover {
        background-color: #f5f5f5;
    }
    
    .pagination .active a {
        background-color: #007bff;
        color: #fff;
    }
    
    .pagination .disabled a {
        opacity: 0.5;
        pointer-events: none;
    }
`

const StyledSingleRepositoryBlock = styled.div`
        max-width: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: baseline;
        width: 100%;
        border: 1px solid grey;
        padding: 10px;
        margin: 10px;
        border-radius: 10px;
        color: white;
        overflow: hidden;

    .nodeInfo{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        color: dimgrey;
        font-weight: 600;   
    }

    &>a{
       text-decoration: none;
       font-weight: bold;
       color: #2970D7;

       &:hover{
        text-decoration: underline;
       }
    }
`

const StyledSearchInput = styled.input`
    display: block;
    color: white;
    margin: 2rem auto;
    font-size: 18px;
    max-width: 450px;
    width: 100%;
    text-align: center;
    border: 1px solid darkcyan;
    padding: 10px;
    outline: none;
    border-radius: 17px;
    background: #0D1117;

    &::placeholder{
        color: rgba(28, 112, 215, 0.8);
    }
`

export { StyledRepositoryPage, StyledSingleRepositoryBlock, StyledSearchInput };