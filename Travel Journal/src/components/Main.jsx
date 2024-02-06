import Card from "./Card";
import data from "../data";

export default function Main() {
  const travelData = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return <div className="displaySection">{travelData}</div>;
}
