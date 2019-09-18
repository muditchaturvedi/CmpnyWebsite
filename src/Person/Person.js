import React from 'react';


const Person = (props) =>{
 return(
     <div>
    <p>I am {props.name}`s Friend and I am {props.age} year old</p>
    <p>{props.children}</p>
    </div>
 );
}

export default Person;