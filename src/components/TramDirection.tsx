type Props = {
  tramDirection: string;
};

const TramDirection = ({ tramDirection }: Props) => {
  return (
    <div className="row-box-large display-box">
      <div className="display-title">Richtung</div>
      <div className="display-content display-content-direction">
        {tramDirection}
      </div>
    </div>
  );
};

export default TramDirection;
