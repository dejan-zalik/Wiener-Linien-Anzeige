import { getMinuteDifferenceFromNow } from '../utils/time';

type Props = {
  tramDepartures: {
    departureTime: {
      timeReal: string;
    };
  }[];
};

const TramFollowupTrains = ({ tramDepartures }: Props) => {
  tramDepartures.shift();
  const tramDeparturesArray = [
    ...tramDepartures,
    ...Array(6 - tramDepartures.length).fill(null),
  ];

  return (
    <div className="row-box-large display-box">
      <div className="display-title">Spätere abfahrten</div>
      <div className="display-content-no-border">
        <div className="display-followup-times">
          {tramDeparturesArray.map((display, index) =>
            display ? (
              <div key={index} className="box-border">
                {getMinuteDifferenceFromNow(display.departureTime.timeReal)}
              </div>
            ) : (
              <div className="box-border" key={index}></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TramFollowupTrains;
