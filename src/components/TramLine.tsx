type Props = {
  tramLineName: string;
};

const TramLine = ({ tramLineName }: Props) => {
  return (
    <div className="row-box-small display-box">
      <div className="display-title">Linie</div>
      <div className="display-content display-content-line">{tramLineName}</div>
    </div>
  );
};

export default TramLine;
