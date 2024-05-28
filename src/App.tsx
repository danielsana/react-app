import { useState } from "react";
import Alert from "./components/Alert"
import Btn from "./components/Btn"

function App() {

  const [alertVisible, setAlertVisibility]= useState(false);
  
  return <div>
    {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>hello world</Alert>}
    <Btn onClick={()=>setAlertVisibility(true)}>
      click me
    </Btn>
  </div>
}

export default App
