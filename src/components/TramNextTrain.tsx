import { getMinuteDifferenceFromNow } from '../utils/time';

type Props = {
  tramNextTrain: string;
};

const TramNextTrain = ({ tramNextTrain }: Props) => {
  return (
    <div className="row-box-small display-box">
      <div className="display-title">Nächster Zug</div>
      <div className="display-content">
        <div style={{ fontSize: '36px' }}>
          {getMinuteDifferenceFromNow(tramNextTrain)}
        </div>
        <div style={{ fontSize: '12px' }}>min</div>
      </div>
    </div>
  );
};

export default TramNextTrain;
