import Button from './components/Button/Button';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <h1 className="home-heading">UnoZone</h1>
      <div className="home-card-deck">
        <img
          className="home-wild-card"
          src="src\assets\UNO Cards\Special\wild.svg"
          alt=""
        />
        <img
          className="home-plus-four-card"
          src="src\assets\UNO Cards\Special\plus-four.svg"
          alt=""
        />
        <img
          className="home-blue-skip-card"
          src="src\assets\UNO Cards\Color\blue\other\reverse.svg"
          alt=""
        />
      </div>
      <p className="home-intro">
        A multiplayer web platform which allows you to
        connect with players around the world and play a match of UNO!
      </p>
      <Button />
    </div>
  );
}
