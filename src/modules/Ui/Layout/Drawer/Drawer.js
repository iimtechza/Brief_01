import React from "react";

// import Companies from './Companies.js'
// import New_Company from './new_company.js'

class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      slides: []
    };
  }

  render() {
    const { active, children } = this.props;
    return (
      <section
        id="Drawer"
        style={
          active
            ? {
                transform: "translate3d(0vw,0,0)",
                width: "50vw",
                opacity: 1,
                // transitionDelay: "0.5s",
                transitionDuration: "0.5s",
                zIndex: 1020
              }
            : {
                transform: "translate3d(0vw,0,0)",
                width: "50vw",
                opacity: 0,
                // transitionDelay: "0.5s",
                transitionDuration: "0.5s",
                zIndex: 1020
              }
        }
        className={
          (this.props.active ? " active " : " inactive ") +
          " trans-a z-999 top-0 right-0 vh-100 fixed sans-serif w-100  db bg-near-white flex- right "
        }
      >
        {this.props.children}
      </section>
    );
  }
}
export default Drawer;
