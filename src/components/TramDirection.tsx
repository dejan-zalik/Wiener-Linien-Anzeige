import { Props } from './TramDisplay';

const TramDirection = ({ tram }: Props) => {
  return (
    <div className="display-box display-box-large">
      <div className="display-title">Richtung</div>
      <div className="display-content display-content-direction">
        {tram.lines[0].towards}
      </div>
    </div>
  );
};

export default TramDirection;
