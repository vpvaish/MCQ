import React from 'react'

export default function Question(props) {
  return (
    <div>
      <form>
    
       <h3> Q.  {props.qnum} : {props.question}  = ? </h3>
       
       
        <b> {props.alpha1}  <input name='radio' type='radio' value='A'/> {props.option1} </b>  <br></br>
        <b>{props.alpha2}  <input name='radio' type='radio' value='B'/> {props.option2} </b> <br></br>
        <b>{props.alpha3} <input name='radio' type='radio' value='C'/>  {props.option3} </b> <br></br>
        <b>{props.alpha4} <input name='radio' type='radio' value='D'/>  {props.option4} </b> <br></br>
       <br></br>
      </form>
    </div>
    
  )
}
