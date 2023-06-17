export interface RepositoryNode {
    id: string;
    name: string;
    nameWithOwner: string;
    url: string;
    description: string;
    stargazerCount: number;
    lastCommentDate: string;
};

interface ReposState {
    repositories: RepositoryNode[];
    loading: boolean;
    error: string | null
};

interface User {
    login: string;
    name: string | null;
    bio: string | null;
    avatarUrl: string
};

interface UserQueryResponse {
    user: User | null
};

interface RepositoryData {
    languages: LanguageEdge[]
};

export interface LanguageNode {
    name: string
};

export interface LanguageEdge {
    node: LanguageNode
};

export interface SelectedPage {
    selected: number
};

export interface RootState {
    reposReducer: ReposState;
    userReducer: UserQueryResponse;
    languagesReducer: RepositoryData
};

export interface PaginatedDataProps {
    data: RepositoryNode[];
    itemsPerPage: number
};
