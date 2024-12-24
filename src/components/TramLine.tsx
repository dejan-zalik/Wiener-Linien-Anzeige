import { Props } from './TramDisplay';

const TramLine = ({ tram }: Props) => {
  return (
    <div className="display-box display-box-small">
      <div className="display-title">Linie</div>
      <div className="display-content display-content-line">
        {tram.lines[0].departures.departure[0]?.vehicle.name}
      </div>
    </div>
  );
};

export default TramLine;
