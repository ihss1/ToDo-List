import { useState } from "react";
import './todo.css'


export const ToDoList =()=>{
    const [list,setList] = useState(false);
    const [inputvalue,setInputValue] = useState("");
    const [listValue,setListValue] = useState([])
    const handleClick =()=>{
            setList(true)
    }
    const handleAdd =()=>{
        if(inputvalue.trim() !== ""){
            setListValue([...listValue,inputvalue])
            setInputValue("")
        }
    }
        const handleRemoveItem =(index)=>{
            const UpdatedList = [...listValue]
            UpdatedList.splice(index,1)
            setListValue(UpdatedList)

        }
    
    return(
        <>
        <div className="container">
            <h1> todo list </h1> 
        </div>
        <div onClick={handleClick}> 
        {!list }
        </div>
        {list && 
            <div>
                <input type="text" value={inputvalue} className="input" placeholder="tache" 
                onChange={(e)=>setInputValue(e.target.value)} required/>
                <button onClick={handleAdd} className="button" type="button" > add </button>
                <ul>
                    {listValue.map((item,index)=>
                    <li key={index}  onClick={()=>{handleRemoveItem(index)}}>
                        {item}
                    </li>
                    )
                    }
                </ul>
            </div>
        }
        </>
    )
}