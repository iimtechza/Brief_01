import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      slides: []
    };
  }

  render() {
    return <>{this.props.children}</>;
  }
}

export default Main;
