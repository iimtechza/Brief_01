import React from "react";

// import Companies from './Companies.js'
// import New_Company from './new_company.js'

class New_Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      slides: []
    };
  }

  render() {
    return (
      <section
        id=""
        className=" sans-serif w-30 relative db bg-white h-100 flex-"
      >
        <div className=" flex flex-column ph5- mw7 left mb3 ">
          <h1 className=" f6 ttu tracked fw7 green sans-serif pt4 pb0 ">
            Entity Type
          </h1>
          <p className=" pt0 mt0 f6 fw5 black-40 sans-serif ">
            Is your project a business or foundation?
          </p>
        </div>
        <div className=" flex flex-row justify-start ph5 left pt3 flex-auto mw5- w-100 pb5">
          <button className=" f5 fw6 sans-serif pv2 flex left h-100 items-center justify-center bg-white green bn bw1 b--black-70 br2 ttc pointer dim shadow-1 hover-shadow-2 mr3 ph3 ">
            Company
          </button>
          <button className=" f5 fw6 sans-serif pv2 flex left h-100 items-center justify-center bg-white green bn bw1 b--black-70 br2 ttc pointer dim shadow-1 hover-shadow-2 mr3 ph3  ">
            Foundation
          </button>
        </div>
      </section>
    );
  }
}
export default New_Company;
