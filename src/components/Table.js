import React from "react";
function Table({ employees }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
      {/* goes through the employee database starting at index */}
        {employees.map((employee, i) => (
          <tr key={i + "-employee"}>
            <td>
              {employee.name.first} {employee.name.last}
            </td>
            <td>{employee.email}</td>
            <td>{new Date(employee.dob.date).toLocaleDateString()}</td>
            <td>
              {employee.location.city}, {employee.location.state}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;