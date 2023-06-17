import React, { useState, ChangeEvent, CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import ReactPaginate from 'react-paginate';
import { searchRepositories } from '../../redux/slices/repositories';
import { StarIcon } from '../../assets';
import { AppDispatch } from '../../redux/store';
import { convertToSimpleDate } from '../../helpers/helper';
import { StyledRepositoryPage, StyledSearchInput, StyledSingleRepositoryBlock } from './RepositoryPage.style';

const PaginatedData = ({ data, itemsPerPage }: any) => {
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector((state: any) => state.reposReducer.loading);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    const handlePageChange = (selectedPage: any) => {
        setCurrentPage(selectedPage.selected);
    };

    const offset = currentPage * itemsPerPage;
    const paginatedData = data.slice(offset, offset + itemsPerPage);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = async (e: any) => {
        e.preventDefault();

        await dispatch(searchRepositories(searchTerm));
    };

    const override: CSSProperties = {
        position: "fixed",
        top: "40%",
        left: "50%"
    };

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <StyledSearchInput
                    type="text"
                    placeholder="Search repository &#128269;"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </form>
            <div className='child'>
                {loading && paginatedData.length ? <RingLoader size={80} color="#22A6F2" cssOverride={override} /> :
                    paginatedData.map((node: any) => {
                        const simpleDate = convertToSimpleDate(node.lastCommentDate);
                        
                        return (
                            <StyledSingleRepositoryBlock key={node.id}>
                                <Link to={`/RespositoryCard/${node.id}`}>
                                    {node.name}
                                </Link>
                                <p>{node.description}</p>
                                <div className='nodeInfo'>
                                    <div className='starBlock'>
                                        <StarIcon />
                                        <span>{node.stargazerCount}</span>
                                    </div>
                                    <div>Updated on {simpleDate}</div>
                                </div>
                            </StyledSingleRepositoryBlock>
                        )
                    })
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