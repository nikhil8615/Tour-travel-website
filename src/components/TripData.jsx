import "./Recent.css";
import { useNavigate } from "react-router-dom";

function TripData(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trip/${props.id}`);
  };

  return (
    <div className="t-card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="t-image">
        <img src={props.image} alt={props.heading} />
      </div>
      <div className="t-content">
        <h4>{props.heading}</h4>
        <p>{props.shortText}</p>
        <button className="t-button">Read More</button>
      </div>
    </div>
  );
}

export default TripData;
