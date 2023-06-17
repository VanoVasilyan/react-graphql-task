import React, { useEffect, useState, ChangeEvent } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyledRepositoryPage, StyledSearchInput, StyledSingleRepositoryBlock } from './RepositoryPage.style';


const PaginatedData = ({ data, itemsPerPage }: any) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handlePageChange = (selectedPage: any) => {
        setCurrentPage(selectedPage.selected);
    };

    const offset = currentPage * itemsPerPage;
    const paginatedData = data.slice(offset, offset + itemsPerPage);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const results = paginatedData.filter((person: any) =>
            person.name.toLowerCase().includes(searchTerm) && person.description
        );
        setSearchResults(results);
    }, [searchTerm]);

    return (
        <div>
            <StyledSearchInput
                type="text"
                placeholder="Search repository &#128269;"
                value={searchTerm}
                onChange={handleChange}
            />
            <div className='child'>
                {
                    searchResults.length && searchTerm ? (
                        searchResults.map((node: any) => (
                            <StyledSingleRepositoryBlock key={node.id}>
                                <Link to={`/RespositoryCard/${node.id}`}>
                                    {node.name}
                                </Link>
                                <p>{node.description}</p>
                                <span>⭐ {node.stargazers.totalCount}</span>
                            </StyledSingleRepositoryBlock>
                        ))
                    ) : (
                        paginatedData.map((node: any) => (
                            <StyledSingleRepositoryBlock key={node.id}>
                                <Link to={`/RespositoryCard/${node.id}`}>
                                    {node.name}
                                </Link>
                                <p>{node.description}</p>
                                <span>⭐ {node.stargazers.totalCount}</span>
                            </StyledSingleRepositoryBlock>
                        ))
                    )
                }
            </div>
            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                breakLabel="..."
                pageCount={Math.ceil(data.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                activeClassName={"active"}
            />
        </div>
    );
};

const RepositoryPage: React.FC = () => {
    const nodes = useSelector((state: any) => state.reposReducer.repositories);

    return (
        <StyledRepositoryPage>
            <PaginatedData data={nodes} itemsPerPage={10} />
        </StyledRepositoryPage >
    )
}

export default RepositoryPage