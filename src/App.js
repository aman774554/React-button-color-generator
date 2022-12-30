
import './App.css';
import {useState} from 'react';

function App() {
const [count, setCount] = useState(0);
const [color,setColor] = useState("")
const generateColor = () =>{
    setColor(Math.random().toString(16).substr(-6));
    console.log(Math.random().toString(16).substr(-6))
};

  return (
    <div  >
    <button style={{
        backgroundColor: "#" + color
      }}
      onClick={() => {setCount(count + 3); generateColor();}}>Score: {count} </button>
    </div>
  );
}

export default App;
