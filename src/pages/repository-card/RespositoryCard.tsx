import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { StyledRepositoryCard } from './RepositoryCard.style';
import { useSelector, useDispatch } from 'react-redux';
import { StarIcon } from '../../assets';
import { convertToSimpleDate } from '../../helpers/helper';
import { fetchUserInfo } from '../../redux/slices/user';
import { AppDispatch } from '../../redux/store';
import { getRepositoryLanguages } from '../../redux/slices/usedLanguages';

const RespositoryCard: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const nodes = useSelector((state: any) => state.reposReducer.repositories);
    const userInfo = useSelector((state: any) => state.userReducer.user);
    const usedLanguages = useSelector((state: any) => state.languagesReducer.languages);
    const { id } = useParams();

    const findedNode = nodes.find((node: any) => node.id === id)

    if (!findedNode) return <div> Something went Wrong...</div>

    const getUserData = async () => {
        const indexOfSlash = findedNode.nameWithOwner.indexOf('/');
        const ownerName = findedNode.nameWithOwner.slice(0, indexOfSlash);
        await dispatch(fetchUserInfo(ownerName))
    }
    const simpleDate = convertToSimpleDate(findedNode.lastCommentDate);

    const getUsedLanguages = async () => {
        if (userInfo?.login && findedNode?.name) {
            await dispatch(getRepositoryLanguages({ owner: userInfo.login, repo: findedNode.name }))
        }
    }

    useEffect(() => {
        if (id) {
            getUserData()
        }
    }, [id])

    useEffect(() => {
        getUsedLanguages()
    }, [userInfo, findedNode])

    return (
        <StyledRepositoryCard>
            {
                userInfo && (<div className='userInfo'>
                    {userInfo?.avatarUrl ? <img src={userInfo.avatarUrl} alt="imageUrl" /> : null}
                    <p className='userName'>{userInfo?.name}</p>
                    <Link rel='roreferrer' target='_blank' to={findedNode.url}>
                        {userInfo?.login}
                    </Link>
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
                                    usedLanguages.map((usedLanguage: any, index: any) => <li key={index}>{usedLanguage.name}</li>)
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