import RateButtons from "../RateButtons/RateButtons";
import { useState } from "react";
import ThankYou from "../ThankYou/ThankYou";

export default function Main() {
  const [isSubmited, setIsSubmited] = useState(null);
  const [selectRating, setSelectRating] = useState(null);

  function handleSubmit(setSubmit) {
    setIsSubmited(setSubmit);
    console.log("submited");
  }

  return (
    <>
      {isSubmited ? (
        <ThankYou rating={selectRating} />
      ) : (
        <main className="main_component">
          <h1>How did we do?</h1>

          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <RateButtons pickRating={setSelectRating} />

          <button onClick={handleSubmit} className="submit_btn">
            Submit
          </button>
        </main>
      )}
    </>
  );
}
