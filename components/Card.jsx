import marker from "../src/assets/marker.svg";

export default function Card(props) {
  return (
    <div className="card">
      <div
        className="card__img"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      ></div>
      <div className="card__text">
        <div className="card__location">
          <h3>
            <img src={marker} alt="marker" />
            {props.location}
          </h3>
          <a
            href={props.googleMapsUrl}
            target="_blank"
            className="card__map-link"
          >
            View on Google Maps
          </a>
        </div>
        <h2>{props.title}</h2>
        <h3 className="card__date">
          {props.startDate} - {props.endDate}
        </h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
