import { Route, Routes, useParams } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Game from './pages/Game.jsx';
import Error from './pages/Error.jsx';

export default function App() {
  const ValidPath = () => {
    const { id } = useParams();
    if (/^[1-9]{4}$/.test(id)) {
      return <Game />;
    } else {
      return <Error />;
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<ValidPath />} />
    </Routes>
  );
}
