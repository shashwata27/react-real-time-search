import React from "react";
import JSONDATA from "../MOCK_DATA.json";
import "../css/App.css";

export default class App extends React.Component {
  state = { search: "", dob: "" };
  render() {
    return (
      <div className="App">
        <div className="Search">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            onChange={(e) =>
              this.setState({
                search: e.target.value,
              })
            }
          />
          <input
            type="date"
            name="dob"
            onChange={(e) =>
              this.setState({
                dob: e.target.value,
              })
            }
          />
        </div>

        <div className="result">
          {JSONDATA.filter((data) => {
            if (this.state.search === "") {
              return data;
            } else if (
              data.first_name
                .toLocaleLowerCase()
                .includes(this.state.search.toLocaleLowerCase()) ||
              data.last_name
                .toLocaleLowerCase()
                .includes(this.state.search.toLocaleLowerCase()) ||
              data.first_name
                .concat(" ", data.last_name)
                .toLocaleLowerCase()
                .includes(this.state.search.toLocaleLowerCase())
            ) {
              return data;
            }
          }).map((val) => (
            <li key={val.id} style={{ listStyleType: "none" }}>
              <div>{`${val.first_name} ${val.last_name}`}</div>
              <div>{`${val.phone}`}</div>
            </li>
          ))}
        </div>
      </div>
    );
  }
}
