import React, { Component } from 'react'
import CourseBox from './CourseBox';    
import Child from './Child';

const courses = [
  { id: 1, name: "SQL", price: 1999 },
  { id: 2, name: "Java", price: 2499 },
  { id: 3, name: "Dotnet", price: 2999 },
  { id: 4, name: "HTML & CSS", price: 999 },
  { id: 5, name: "JavaScript", price: 1999 },
  { id: 6, name: "C++", price: 1499 },
];

export default class Course extends Component {

    renderData =(data) =>{
    
   return data.map(course => <CourseBox key={course.id} course = {course} />

)
    }
  render() {
    return (
      <div>
         
          <h2>Courses </h2>
          
            <Child data={courses} render={this.renderData}/>
          
     
      </div>
    )
  }
}
