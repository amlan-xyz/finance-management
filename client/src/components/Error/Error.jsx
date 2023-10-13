import "./Error.css";
export const Error = ({ error }) => {
  return (
    <div className="error">
      <div className="error__container">
        <h1>{error}</h1>
        <button
          onClick={() => window.location.reload(false)}
          className="primary__btn"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};
