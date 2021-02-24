import React from "react";

class Audio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      one: 0,
      two: 0,
      three: false
    };
  }

  render() {
    return (
      <App.Provider
        value={{
          state: this.state,
          Audio: this
        }}
      >
        {this.props.children}
      </App.Provider>
    );
  }
}

export default Audio;
