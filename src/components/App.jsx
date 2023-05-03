import React from "react";

function App() {
  setInterval(getTime, 1000);
  let time = new Date().toLocaleTimeString().replace(/AM|PM/, "");
  const [currentTime, setTime] = React.useState(time);
  function getTime() {
    time = new Date().toLocaleTimeString().replace(/AM|PM/, "");
    setTime(time);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
