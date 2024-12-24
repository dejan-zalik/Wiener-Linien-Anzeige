const sourceUrl = 'https://eogrkqip9l.execute-api.eu-west-1.amazonaws.com/';
export type TramStopDataItem = {
  lines: {
    towards: string;
    name: string;
    departures: {
      departure: {
        departureTime: { timeReal: string };
        vehicle: { name: string; towards: string };
      }[];
    };
  }[];
};
export type TramStopData = Record<number, TramStopDataItem>;

export async function getTramData(
  tramStopIds: number[]
): Promise<TramStopData> {
  const response = await fetch(
    `${sourceUrl}monitor?stopId=${tramStopIds.join(',')}`
  );
  const data = await response.json();
  const tramData = tramStopIds.reduce<TramStopData>((acc, value, index) => {
    acc[value] = data.data.monitors[index];

    return acc;
  }, {});

  console.log(tramData);
  return tramData;
}
