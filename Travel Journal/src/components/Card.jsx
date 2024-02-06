export default function Card(props) {
  return (
    <div className="card-component">
      <div className="card">
        <img className="travel--image" src={props.img} alt="Mount Fuji" />
        <div className="hero--content">
          <div className="hero--map">
            <i className="fa-solid fa-location-dot"></i>
            <p>{props.location}</p>
            <a href={props.mapLink}>View on Google Maps</a>
          </div>
          <h1>{props.title}</h1>
          <p className="card--date">{props.date}</p>
          <p className="card--description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
