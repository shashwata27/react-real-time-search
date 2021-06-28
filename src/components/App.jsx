import React from "react";
import JSONDATA from "../MOCK_DATA.json";
import "../css/App.css";
import resultFilterer from "../utils/resultFilterer";
import dateFilterer from "../utils/dateFilterer";
import locationSvg from "../icons/placeholder.svg";

export default class App extends React.Component {
  state = { search: "", dob: "" };
  render() {
    return (
      <div className="App">
        <div className="search">
          <input
            type="text"
            name="search"
            placeholder="Search"
            id="text"
            onChange={(e) =>
              this.setState({
                search: e.target.value,
              })
            }
          />
          <input
            type="date"
            name="dob"
            id="date"
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
              <div className="li" key={val.id}>
                <div className="ResDet">
                  <div className="ResName">{`${val.first_name} ${val.last_name}`}</div>
                  <div className="ResInfo">
                    <img src={locationSvg} />
                    {`${val.city} ${val.dob}`}
                  </div>
                </div>
                <div className="ResPh">{`${val.phone} `}</div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
