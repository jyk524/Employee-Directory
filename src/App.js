import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import axios from "axios";
function App() {
  //state hook gives reference to setState which is later referenced
  const [state, setState] = React.useState({
    base: [],
    employees: [],
  });
  React.useEffect(() => {
    axios
    // Gets the Table Data
      .get("https://randomuser.me/api/?results=100")
      // console.log(response.data.results);
        // Sets the employee data to the api data
        // Sets the base Data to the response data
      .then((response) => {
        console.log(response.data.results);
        // map function to map out and get only the data that we will use
        const mapped = response.data.results.map((emp) => ({
          img: emp.picture.large,
          name: emp.name.first + " " + emp.name.last,
          email: emp.email,
          dob: emp.dob.date,
          location: emp.location.city + ", " + emp.location.state,
        }));
        console.log(mapped);
        setState({
          employees: mapped,
          base: mapped,
        });
      })
       // If an error occurs log the error
      .catch((error) => console.warn(error.message));
  }, []);
  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setState({
      ...state,
      employees: state.base.filter(
        (employee) =>
          employee.name.toLowerCase().includes(searchTerm) ||
          employee.location.toLowerCase().includes(searchTerm)
      ),
    });
  };
  const sortTable = (e) => {
    const key = e.target.textContent.toLowerCase();
    setState({
      ...state,
      employees: state.employees.sort((a, b) => (a[key] > b[key] ? 1 : -1)),
    });
  };
  return (
    <div>
      <Header />
      <Search onChange={handleChange} />
      <Table employees={state.employees} sortTable={sortTable} />
    </div>
  );
}
export default App;