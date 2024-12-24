import { getMinuteDifferenceFromNow } from '../utils/time';
import { Props } from './TramDisplay';

const TramFollowupTrains = ({ tram }: Props) => {
  return (
    <div className="display-box display-box-large">
      <div className="display-title">Spätere abfahrten</div>
      <div className="display-content-no-border">
        <div className="display-followup-times">
          {tram.lines[0].departures.departure.map(
            (display: any, index: number) =>
              index > 0 &&
              index <= 6 && (
                <div key={index} className="box-border">
                  {getMinuteDifferenceFromNow(display.departureTime.timeReal)}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default TramFollowupTrains;
