import React,{useState,useEffect}from "react";
import '../styles/counter.css';
function Counter(){
   const [counter,setcounter] = useState(0);
   useEffect(()=>{ 
    console.log(`El contador ha cambiado a: ${counter}`)
   }, [counter]);
    return(
        <div className="counter">
        <h1>Contador</h1>
        <p>{counter}</p>
        <button onClick={()=>setcounter(counter+1)}>Incremeter</button>
        <button onClick={()=>setcounter(counter-1)}>Decremeter</button>
        <button onClick={()=>setcounter(0)}>Reiniciar</button>
        </div>
    );
};
export default Counter;