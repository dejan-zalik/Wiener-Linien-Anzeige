import { TramStopDataItem } from '../utils/monitorApi';
import TramDirection from './TramDirection';
import TramFollowupTrains from './TramFollowupTrains';
import TramLine from './TramLine';
import TramNextTrain from './TramNextTrain';

export type Props = { tram: TramStopDataItem };

const TramDisplay = ({ tram }: Props) => {
  return (
    <div className="mt-3">
      <div className="flex-container">
        <TramLine tram={tram} />
        <TramDirection tram={tram} />
      </div>
      <div className="flex-container">
        <TramNextTrain tram={tram} />
        <TramFollowupTrains tram={tram} />
      </div>
    </div>
  );
};

export default TramDisplay;
