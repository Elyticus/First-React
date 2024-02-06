export default function Contact(props) {
  return (
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <p>{`Superpower: ${props.superpower}`}</p>
      </div>
      <div className="info-group">
        <p>{props.land}</p>
      </div>
    </div>
  );
}
