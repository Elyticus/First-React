/* eslint-disable react/prop-types */
export default function ThankYou({ rating }) {
  return (
    <>
      <section className="tahnkyou_page">
        <p>You selected {rating} out of 5</p>
        <h1>Thank you!</h1>
      </section>
    </>
  );
}
