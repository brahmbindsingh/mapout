import logo from "./logo.svg";
import "./App.css";
import MainCounter from "./Components/MainCounter";
import SubCounter from "./Components/SubCounter";
import { useMemo, useState } from "react";

function App() {
  const [noOfCounters, setNoOfCounters] = useState(0);
  const [counters, setCounters] = useState([]);
  const sum = counters.reduce((acc, item) => acc + item, 0);

  const createCounters = (e) => {
    if(e.key==="Enter"){
      console.log("hello");
      let arr = []
      for(let i=0;i<noOfCounters;i++){
        arr.push(0);
      }
      setCounters(arr);
    }
  }

  const valueChange = useMemo(() => (type, index) => {
    let tempCounters = [...counters];
    switch (type) {
      case "inc_value":
        tempCounters[index] += 1;
        setCounters(tempCounters);
        break;

      case "reset":
        tempCounters[index] = 0;
        setCounters(tempCounters);
        break;
      
      case "main_reset":
        let tempArr = counters.map((el)=>{
          return 0;
        })
        setCounters(tempArr);

      default:
    }
  }, [counters]);


  return (
    <div className="App">
      
      <MainCounter count={sum} onReset = {() => valueChange('main_reset')} />
      <input type="number" value={noOfCounters} onChange={(e)=>setNoOfCounters(e.currentTarget.value)} onKeyDown={createCounters} />
      <button onClick={() => setCounters([...counters, 0])}>Add Counter</button>
      <div className="counters-area">
        {counters.map((value, index) => {
          return <SubCounter key={index} value = {value} onIncrement = {() => valueChange('inc_value', index)} onReset = {() => valueChange('reset', index)} />;
        })}
      </div>
    </div>
  );
}

export default App;
