const TramDisplay = ({ tram, currentTime }: any, { index }: any) => {
  return (
    <div key={index} style={{ marginTop: '3px' }}>
      <div style={{ display: 'flex' }}>
        <div className="display-box display-box-small">
          <div className="display-title">Linie</div>
          <div className="display-content display-content-line">
            {
              tram.data.monitors[0].lines[0].departures.departure[0]?.vehicle
                .name
            }
          </div>
        </div>

        <div className="display-box display-box-large">
          <div className="display-title">Richtung</div>
          <div className="display-content display-content-direction">
            {tram.data.monitors[0].lines[0].towards}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="display-box display-box-small">
          <div className="display-title">Nächster Zug</div>
          <div className="display-content display-content-line">
            <div>
              {Math.ceil(
                (new Date(
                  tram.data.monitors[0].lines[0].departures.departure[0].departureTime.timeReal
                ).getTime() -
                  currentTime.getTime()) /
                  60000
              )}
            </div>
          </div>
        </div>

        <div className="display-box display-box-large">
          <div className="display-title">Spätere abfahrten</div>
          <div
            style={{
              flexGrow: '1',
              alignContent: 'center',
              textAlign: 'center',
            }}
          >
            <div className="display-followup-times">
              {tram.data.monitors[0].lines[0].departures.departure.map(
                (display: any, index: number) =>
                  new Date(display.departureTime.timeReal).getTime() >
                    currentTime.getTime() &&
                  index > 0 &&
                  index <= 6 && (
                    <div
                      key={index}
                      style={{
                        border: 'solid',
                        borderColor: '#ffced1',
                      }}
                    >
                      {Math.ceil(
                        (new Date(display.departureTime.timeReal).getTime() -
                          currentTime.getTime()) /
                          60000
                      )}
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TramDisplay;
