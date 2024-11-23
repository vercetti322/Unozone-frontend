import { useParams } from 'react-router-dom';
import GradientText from '../../components/GradientText/GradientText';
import CardDeck from '../../components/CardDeck/CardDeck';
import './Game.css';

export default function Game() {
  const { id } = useParams();
  return (
    <div className="game-page">
      <GradientText fontSize={30} text={`#${id}`} />
      <CardDeck count={8}/>
      <CardDeck count={20}/>
    </div>
  );
}
