import React from "react";
import JSONDATA from "../MOCK_DATA.json";
import "../css/App.css";
import resultFilterer from "../utils/resultFilterer";
import dateFilterer from "../utils/dateFilterer";

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
            return resultFilterer(data, this.state.search);
          })
            .filter((data) => {
              return dateFilterer(data, this.state.dob);
            })
            .map((val) => (
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
