import React, { Component } from 'react'
import './ComponentInput.css'
import Task from '../Task/Task';
import ListTasks from '../ListTasks/ListTasks';

export default class ComponentInput extends Component {

constructor(){
    super();

    this.state= { 
               NewTask:  {entry: "", isComplete:false},

                 Tasks:[]};
    
}

///////////////********Get state *********//////////////////

    GetEntry=()=> {

       return this.state.entry;

          }

      GetIsComplete=()=>{
          return this.state.isComplete;
      }    

/////////////////////////////////////

SetEntry=(event)=>
{


    this.setState({NewTask:{ entry:event.target.value, isComplete:false}})

  
}

///////////////////////////////////////////////////

AddItems =(event) => { 
     event.preventDefault()
 if(this.state.NewTask.entry)
    this.setState(state=> {
                      const Tasks= [... state.Tasks, state.NewTask];
                      return {  Tasks, 
                        NewTask:{entry:"", isComplete:false}  };
                                
});   
     
}

/////////////////////////  inverser l'etat courent de task //////////////


INverseCurrentState=(i) => 

    {
    
        this.setState(state => {
            const Tasks = state.Tasks.map((el, j) => {
              if (i === j) return { entry: el.entry, isComplete: !el.isComplete };
              else return el;
            });
            return { Tasks };
          });
        };

        
/////////////////////////////////////////////////////////////////////



removeTask=(i) =>{
 
   
    this.setState(state => {
        const Tasks= state.Tasks.filter((el,j) => i!==j);
        // console.log(Tasks)
        return {Tasks};
        
    });


}









////////////////////Vider le champs input ////////////////////

cancelCourse = () => { 
    this.setState({
    entry: "",
   
    });
  }






///////////////////////////////////////////////////////////
    render() {
        return (
            <div>
            <div className="Entry">
               
                <h1> TO-Do App!  </h1>
                <h5>   Add new To-Do  </h5>
                <form>
                <input type="text" onChange={this.SetEntry} onClick={this.cancelCourse} value={this.state.NewTask.entry}></input>
                <button type="submit"  onClick={this.AddItems} > Add  </button>
                </form>
               </div>
                <ListTasks ex={this.state.Tasks}  delete={this.removeTask} updateTask={this.INverseCurrentState} />
              </div>
         
            
        )
    }
}
