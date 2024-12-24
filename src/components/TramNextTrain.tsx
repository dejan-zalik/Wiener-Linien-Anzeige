import { getMinuteDifferenceFromNow } from '../utils/time';
import { Props } from './TramDisplay';

const TramNextTrain = ({ tram }: Props) => {
  return (
    <div className="display-box display-box-small">
      <div className="display-title">Nächster Zug</div>
      <div className="display-content display-content-line">
        <div>
          {getMinuteDifferenceFromNow(
            tram.lines[0].departures.departure[0].departureTime.timeReal
          )}
        </div>
      </div>
    </div>
  );
};

export default TramNextTrain;
