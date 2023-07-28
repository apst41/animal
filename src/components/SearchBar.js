import {useState} from "react";


export default function SearchBar({onsubmit}){
    const [term,setTerm] = useState('');


    const handleChange =  (event) =>{
        setTerm(event.target.value);
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault()
        onsubmit(term);
    }

    return (
        <div>
           <form onSubmit={handleFormSubmit}>
               <input value={term} onChange={handleChange}/>
           </form>
        </div>
    )

}
