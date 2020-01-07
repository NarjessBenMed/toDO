import React from 'react'
import ComponentInput from '../ComponentInput/ComponentInput'
import './Task.css'

export default function Task(props) {
    return (
         <div className="Task">
             <div  className="divButt">
            <button name="complete" onClick={()=>  props.UpdateState(props.index)  }>{!props.isCompleted? "Complete":"Undo"}</button>
            <button name="delete"   onClick={ ()=>props.remove(props.index)} > Delete</button>
            </div>
             <label className={props.isCompleted? "complete": ""}>{props.taskName} </label> 
        </div>
        
    )
}
