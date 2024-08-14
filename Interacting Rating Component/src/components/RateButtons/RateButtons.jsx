/* eslint-disable react/prop-types */
import Buttons from "../Buttons/Buttons";
import { useState } from "react";

export default function RateButtons({ pickRating }) {
  const [isActive, setIsActive] = useState(null);

  function handleClick(selectedBtn) {
    setIsActive(selectedBtn);
    pickRating(selectedBtn);
    console.log("clicked", selectedBtn);
  }

  return (
    <section className="list_buttons">
      <Buttons isSelected={isActive === "1"} onClick={() => handleClick("1")}>
        1
      </Buttons>

      <Buttons isSelected={isActive === "2"} onClick={() => handleClick("2")}>
        2
      </Buttons>

      <Buttons isSelected={isActive === "3"} onClick={() => handleClick("3")}>
        3
      </Buttons>

      <Buttons isSelected={isActive === "4"} onClick={() => handleClick("4")}>
        4
      </Buttons>

      <Buttons isSelected={isActive === "5"} onClick={() => handleClick("5")}>
        5
      </Buttons>
    </section>
  );
}
