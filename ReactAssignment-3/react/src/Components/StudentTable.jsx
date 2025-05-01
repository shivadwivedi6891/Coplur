import React from 'react'
import Pass from './Pass';
import Fail from './Fail';

const studentTable = ({students}) => {
  return (
    <table border = "1" cellPadding = "10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Math</th>
          <th>Science</th>
          <th>English</th>
          <th>Total</th>
          <th>Percentage</th>
          <th>Pass/Fail</th>

        </tr>
      </thead>

      <tbody>

        {students.map((student,index) =>{

          const total = student.marks.Math + student.marks.English + student.marks.Science
          const percentage = ((total /300)*100).toFixed(2); 
     

          return (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.marks.Math}</td>
              <td>{student.marks.English}</td>
              <td>{student.marks.Science}</td>
              <td>{total}</td>
              <td>{percentage}%</td>
              <td>{percentage >=80 ? <Pass/> : <Fail/>}</td>
            </tr>
          );

        })}
      </tbody>
    </table>
  );
};

export default  studentTable
