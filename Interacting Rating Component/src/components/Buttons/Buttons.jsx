/* eslint-disable react/prop-types */
export default function Buttons({ children, onClick, isSelected }) {
  return (
    <>
      <li>
        <button
          className={isSelected ? "active" : "rate_btn"}
          onClick={() => onClick(children)}
        >
          {children}
        </button>
      </li>
    </>
  );
}
