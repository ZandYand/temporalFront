import React from 'react';

class AddRegister extends React.Component {
  state = {
    pm10: "",
    pm25: "",
  };

  add = (e) => {
      e.preventDefault();
      if (this.state.pm10 === "" || this.state.pm25 === ""){
          alert("Todos los campos deben llenarse");
          return
      }
      this.props.addRegisterHandler(this.state);
      this.setState({pm10: "", pm25: ""});
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Register</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>PM 10</label>
            <input
              type="text"
              name="pm10"
              placeholder="PM 10"
              value={this.state.pm10}
              onChange={(e) => this.setState({ pm10: e.target.value })}
            />
          </div>
          <div className="field">
            <label>PM 2.5</label>
            <input
              type="text"
              name="pm25"
              placeholder="PM 2.5"
              value={this.state.pm25}
              onChange={(e) => this.setState({ pm25: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddRegister;
