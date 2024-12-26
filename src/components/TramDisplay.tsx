import { TramStopDataItem } from '../utils/monitorApi';
import TramDirection from './TramDirection';
import TramFollowupTrains from './TramFollowupTrains';
import TramLine from './TramLine';
import TramNextTrain from './TramNextTrain';

export type Props = { tram: TramStopDataItem };

const TramDisplay = ({ tram }: Props) => {
  return (
    <div className="mt-3">
      <div className="tram-stop">{tram.locationStop.properties.title}</div>
      <div className="flex-container">
        <TramLine
          tramLineName={tram.lines[0].departures.departure[0]?.vehicle.name}
        />
        <TramDirection tramDirection={tram.lines[0].towards} />
      </div>
      <div className="flex-container">
        <TramNextTrain
          tramNextTrain={
            tram.lines[0].departures.departure[0].departureTime.timeReal
          }
        />
        <TramFollowupTrains
          tramDepartures={tram.lines[0].departures.departure}
        />
      </div>
    </div>
  );
};

export default TramDisplay;
