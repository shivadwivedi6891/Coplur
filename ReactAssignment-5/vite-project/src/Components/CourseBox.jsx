import React, { Component } from 'react'
//import courseBox css file
import './CourseBox.css';


export default class CourseBox extends Component {

    constructor(props){
        super(props)

    }

 
  render() {

      const {name, price} = this.props.course


    return (
      <div className = "Box">
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
    )
  }
}
