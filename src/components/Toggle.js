import React, { useState } from "react";

function Toggle() {
  const [switchState, setSwitch] = useState(false);
  function handleButtonClick() {
    setSwitch(() => !switchState);
  }
  const color = switchState ? "red" : "white";

  return <button style={{ background: color }} onClick={handleButtonClick}>{switchState ? "ON" : "OFF"}</button>;
}

export default Toggle;
