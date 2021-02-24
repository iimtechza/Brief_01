import React from "react";

class Auth extends React.Component {
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
          Auth: this
        }}
      >
        {this.props.children}
      </App.Provider>
    );
  }
}

export default Auth;
