import React from "react";

class Ui_ extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      one: 0,
      two: 0,
      three: false,
      active: 0,
      nudge: false,
      drawer: false
    };
  }

  componentWillReceiveProps(prevState, nextState) {
    console.log("prevState", prevState);
    console.log("nextState", nextState);
  }

  render() {
    return (
      <App.Provider
        value={{
          state: this.state,
          Ui: this
        }}
      >
        {this.props.children}
      </App.Provider>
    );
  }
}

export default Ui_;
