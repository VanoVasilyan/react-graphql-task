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
    }
    
    .pagination li {
        display: inline-block;
        margin: 0 5px;
    }
    
    .pagination a {
        cursor:pointer;
        padding: 5px 10px;
        border: 1px solid #ccc;
        text-decoration: none;
        color: #333;
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
    width: 100%;
    border: 1px solid grey;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    color: white;
    overflow:hidden;

    &>a{
       text-decoration: none;
       font-weight: bold;
       color: #2970D7;

       &:hover{
        text-decoration: underline;
       }
    }
`

export { StyledRepositoryPage, StyledSingleRepositoryBlock };