import React from "react";
function Table({ employees, sortTable }) {
  return (
    <table>
      <thead>
        <tr>
          {/* Column Headers 
          This onClick will sort the table using the function from app.js
          When the header is clicked, the table will sort in asecending order */}
          <th onClick={sortTable}>Img</th>
          <th onClick={sortTable}>Name</th>
          <th onClick={sortTable}>Email</th>
          <th onClick={sortTable}>DOB</th>
          <th onClick={sortTable}>Location</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, i) => (
          <tr key={i + "-employee"}>
            <td>
              <img src={employee.img} alt={employee.name}></img>
            </td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{new Date(employee.dob).toLocaleDateString()}</td>
            <td>{employee.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;