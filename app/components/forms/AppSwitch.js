import React, { useState } from "react";
import { Switch } from "react-native";

function AppSwitch() {
  const [isNew, setIsNew] = useState(false);
  return (
    <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
  );
}

export default AppSwitch;
