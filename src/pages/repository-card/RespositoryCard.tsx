import React from 'react';
import { useParams } from 'react-router-dom';
import { StyledRepositoryCard } from './RepositoryCard.style';

const RespositoryCard: React.FC = () => {
    const { id } = useParams();

    return <StyledRepositoryCard>
        <span>RespositoryCard {id}</span>
    </StyledRepositoryCard>
}

export default RespositoryCard;