import { useState } from "react";

export default function Main() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailPlaceholder] = useState("Email Address");

  function handleChange(e) {
    setEmail(e.target.value);
  }

  const checkValidation = (e) => {
    e.preventDefault();
    const rgExp = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;
    if (rgExp.test(email)) {
      setMessage("Email is valid");
    } else if (email === "") {
      setMessage("Please enter the email");
    } else if (!rgExp.test(email)) {
      setMessage("Please provide a valid email");
    } else {
      setMessage("");
    }
  };

  return (
    <div className="main">
      <h1 className="card-title">
        <span>We&apos;re</span> <br /> coming <br /> soon
      </h1>
      <p className="card-text">
        Hello fellow shoppers! We&apos;re currently building our new fashion
        store. Add your email below to stay up-to-date with announcements and
        our launch deals.
      </p>

      <form onSubmit={checkValidation} className="email">
        <input
          value={email}
          onChange={handleChange}
          type="text"
          placeholder={emailPlaceholder}
          className="errorIcon"
        />

        <button className="btn-icon">
          <img src="/images/icon-arrow.svg" alt="Arrow Icon" />
        </button>
      </form>

      <p className="error">{message}</p>
    </div>
  );
}
