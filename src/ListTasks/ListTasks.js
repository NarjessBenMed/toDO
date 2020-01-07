import React from 'react'
import Task from '../Task/Task.js'
import  './ListTasks.css'

export default function ListTasks(props) {
    return (
          <div>

          <p>  Let's get somme work done </p>
      
    

        <div className="ListTask">
          { props.ex.map((el , i) => (<Task taskName={el.entry} key={i} index={i} remove={props.delete} UpdateState={props.updateTask} isCompleted={el.isComplete} />)) }
        </div>

        </div>
    )
}
