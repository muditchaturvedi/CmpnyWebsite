import React,{ useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Groot from './Person/Groot';

const app =props=>
{
  const [personstate,setState]=useState({
    persons:[
      {name: 'Groot',age:28},
      {name: 'Iron Man',age:29},
      {name: 'Jarvis',age:27},
      {name: 'Black Panther',age:25},
      {name: 'Hulk',age:21}
    ]
  });

  const switchNameHandler= () => {
    console.log('was clicked');
    setState({
      persons:[
        {name: 'Text1',age:28},
        {name: 'Text3 Man',age:29},
        {name: 'Text8',age:28},
        {name: 'Text5 Panther',age:25},
        {name: 'Hulk',age:22}
      ]
    });
  };


    return(
      <div className='App'>
        <h1>I am GROOT...</h1>
        <p>And I am going to save the planet.</p>
        <button onClick={this.switchNameHandler}>Switch button</button>
        <Person name={personstate.persons[0].name} age={personstate.persons[0].age}/>
        <Person name={personstate.persons[1].name} age={personstate.persons[1].age}/>
        <Person name={personstate.persons[2].name} age={personstate.persons[2].age}/>
        <Person name={personstate.persons[3].name} age={personstate.persons[3].age} /> 
        <Person name={personstate.persons[4].name} age={personstate.persons[4].age}/>
        <p>Hello Changes......</p>
        <h1>MuditChaturvedi</h1>
      </div>

    );

}
export default app;
