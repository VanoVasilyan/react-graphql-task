import { CSSProperties } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { RingLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { updateState } from './redux/slices/repositories';
import { GET_REPOSITORIES } from './queries/queries';
import RepositoryPage from './pages/repository-page/RepositoryPage';
import RespositoryCard from './pages/repository-card/RespositoryCard';

function App() {
  const { error, loading, data } = useQuery(GET_REPOSITORIES);
  const dispatch = useDispatch();

  const override: CSSProperties = {
    position: "fixed",
    top: "40%",
    left: "50%"
  };

  if (loading) return <RingLoader size={80} color="#22A6F2" cssOverride={override} />;
  if (error) return <div>Something Went Wrong ((</div>;

  const { search: { nodes } } = data

  if (data) {
    dispatch(updateState(nodes))
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<RepositoryPage />} />
        <Route path='/repositoryPage' element={<RepositoryPage />} />
        <Route path='/RespositoryCard/:id' element={<RespositoryCard />} />
      </Routes>
    </div>
  )
}

export default App
