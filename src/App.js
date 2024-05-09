import React, { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleBulb = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: isOn ? "yellow" : "gray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px auto",
        }}
      >
        {isOn ? "On" : "Off"}
      </div>
      <button onClick={toggleBulb}>{isOn ? "Turn Off" : "Turn On"}</button>
    </div>
  );
}

export default App;