import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getRepositoryLanguages } from '../../redux/slices/usedLanguages';
import { fetchUserInfo } from '../../redux/slices/user';
import { AppDispatch } from '../../redux/store';
import { convertToSimpleDate } from '../../helpers/helper';
import ErrorComponent from '../error-component/ErrorComponent';
import { RepositoryNode, RootState } from '../../types/globalTypes';
import { StarIcon } from '../../assets';
import { StyledRepositoryCard } from './RepositoryCard.style';

const RespositoryCard: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const nodes = useSelector((state: RootState) => state.reposReducer.repositories);
    const userInfo = useSelector((state: RootState) => state.userReducer.user);
    const usedLanguages = useSelector((state: RootState) => state.languagesReducer.languages);
    const { id } = useParams();

    const findedNode = nodes.find((node: RepositoryNode) => node.id === id)

    if (!findedNode) return <ErrorComponent errorMessage='Something went wrong...' />

    const getUserData = async () => {
        const indexOfSlash = findedNode.nameWithOwner.indexOf('/');
        const ownerName = findedNode.nameWithOwner.slice(0, indexOfSlash);
        await dispatch(fetchUserInfo(ownerName));
    }
    const simpleDate = convertToSimpleDate(findedNode.lastCommentDate);

    const getUsedLanguages = async () => {
        if (userInfo?.login && findedNode?.name) {
            await dispatch(getRepositoryLanguages({ owner: userInfo.login, repo: findedNode.name }));
        }
    }

    useEffect(() => {
        if (id) {
            getUserData();
        }
    }, [id])

    useEffect(() => {
        getUsedLanguages();
    }, [userInfo, findedNode])

    return (
        <StyledRepositoryCard>
            {
                userInfo && (<div className='userInfo'>
                    {userInfo?.avatarUrl ? <img src={userInfo.avatarUrl} alt="imageUrl" /> : null}
                    <p className='userName'>{userInfo?.name}</p>
                    <Link rel='roreferrer' target='_blank' to={findedNode.url}>
                        @{userInfo?.login}
                    </Link>
                    <p className='bio'>{userInfo?.bio}</p>
                </div>)
            }
            <div className='repoBlock'>
                <div>
                    <Link rel='roreferrer' target='_blank' to={findedNode.url}>
                        {findedNode.name}
                    </Link>
                    <p>{findedNode.description}</p>
                </div>
                <div className='nodeInfo'>
                    <div className='starBlock'>
                        <StarIcon />
                        <span>{findedNode.stargazerCount}</span>
                    </div>
                    <div>Updated on {simpleDate}</div>
                </div>
                {
                    usedLanguages?.length ? (
                        <div className='usedLanguages'>
                            <h3>Languages</h3>
                            <ol className='languages'>
                                {
                                    usedLanguages.map((usedLanguage, index: number) => {
                                        const { name }: any = usedLanguage;
                                        return <li key={index}>{name}</li>
                                    })
                                }
                            </ol>
                        </div>
                    ) : null
                }
            </div>
        </StyledRepositoryCard>
    )
}

export default RespositoryCard;