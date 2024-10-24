import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import'./bottls.css'

const Bottls = () => {
    const [bottls,setBottls]=useState([]);
    const [Card,setCard]=useState([]);
    useEffect(()=>{
        fetch('bottls.json')
        .then(res =>res.json())
        .then(data=> setBottls(data))
    },[])
    const getBottls=(bottle)=>{
        const newCard =[...Card ,bottle]
        setCard(newCard)
        console.log(newCard)
    }
    return (
        <div>
            <h2>Total Water bottls :{bottls.length} </h2>
            <h2 style={{color:"white"}}>Card bottls :{Card.length} </h2>
             <div className="alignment">
              {bottls.map(bottle=><Bottle 
              key={bottle.id} 
              bottle={bottle} 
              getBottls={getBottls}
              ></Bottle>)}
             </div>
        </div>
    );
};

export default Bottls;