import Button from '../../components/Button/Button';
import GradientText from '../../components/GradientText/GradientText';
import './Error.css';

export default function Error() {
  return (
    <div className="error-page">
      <GradientText fontSize={42} text="Error 404" />
      <h3>Looking to play UNO?</h3>
      <Button text="Home Page" directPath='/' />
    </div>
  );
}
