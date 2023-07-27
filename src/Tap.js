import {useState} from "react";

export default function Tap(){

    const [count,setCount] = useState(0);

    const handleClick = ()=>{
        setCount(count+1);
    };

    return(
        <div>
            <button onClick={handleClick}> Click Animal  </button>
           <p> No of animals {count}</p>
        </div>
    )
}
