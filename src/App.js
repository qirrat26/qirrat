// import Comp1 from "./Comp1";

import { useState } from "react";

function App() {
  const [count,setcount]=useState(0);
   function handlepress(){
    console.log("button is pressed")
    setcount(count+1);
    console.log("button is pressed",count)
   }
   return(
    <div className="app">
      count is {count}
      <button onClick={()=>handlepress()}></button>

    </div>
   )
}

export default App;
