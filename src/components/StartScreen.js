function StartScreen({ num, onClick }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{num} questions to test your react mastery!</h3>
      <button className="btn btn-ui" onClick={onClick}>
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
