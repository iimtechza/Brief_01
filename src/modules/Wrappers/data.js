import React from "react";
import _App from "../Context/context.js";
import data from "../../data/index.js";

class Data extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      one: 0,
      two: 0,
      three: false,

      flow: 0,
      active: 0,
      slides: [],
      images: [],
      nudge: false,
      drawer: false
    };
  }

  componentWilLMount() {
    const images = data.images;
    this.setState({
      images
    });
  }

  render() {
    const { images, companies } = data || { images: [], companies: [] };

    return (
      <_App.Provider
        value={{
          state: this.state,
          Data: this
        }}
      >
        {this.props.children}
      </_App.Provider>
    );
  }
}

export default Data;
