// Imports
import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import axios from "axios";

function App() {
  const [state, setState] = React.useState({
    base: [],
    employees: [],
  });
  React.useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((response) => {
        // console.log(response.data.results);
        setState({
          employees: response.data.results,
          base: response.data.results,
        });
      })
      .catch((error) => console.warn(error.message));
  }, []);
  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setState({
      // automatically renders
      ...state,
      employees: state.base.filter((employee) =>
        employee.name.first.includes(searchTerm)
      ),
    });
  };
  return (
    <div>
      <Header />
      <Search onChange={handleChange} />
      <Table employees={state.employees} />
    </div>
  );
}
export default App;