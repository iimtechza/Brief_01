import React from "react";
// import "../style.css";
// import "../tachyons.css";

// import Companies from './Companies.js'
// import New_Company from './new_company.js'

class Form_01 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      slides: []
    };
  }

  render() {
    const a = false;

    const b = true;

    return (
      <section id="" className="relative db bg-near-white h-100 flex-">
        {a ? <A /> : <B />}

        <div className=" flex flex-row justify-between ph5 left pt3 flex-auto mw5- w-100 pb5">
          <button className=" f5 fw6 sans-serif pv2 flex left w-100 h-100 items-center justify-center bg-white green bn bw1 b--black-70 br2 ttc pointer dim shadow-1 hover-shadow-2 mr3 ">
            Company
          </button>
          <button className=" f5 fw6 sans-serif pv2 flex left w-100 h-100 items-center justify-center bg-white green bn bw1 b--black-70 br2 ttc pointer dim shadow-1 hover-shadow-2 mr3  ">
            Foundation
          </button>
        </div>
      </section>
    );
  }
}
export default Form_01;

const A = () => {
  <div className=" flex flex-column ph5 mw7 left ">
    <h1 className=" f6 ttu tracked fw7 black sans-serif pt5 pb0 ">Type_A</h1>
    <p className=" lh-copy pt0 mt0 f6 fw5 black-40 sans-serif  ">
      Is your concern a company or foundation?
    </p>
  </div>;
};
const B = () => {
  <div className=" flex flex-column ph5 mw7 left ">
    <h1 className=" f6 ttu tracked fw7 black sans-serif pt5 pb0 ">Type_B</h1>
    <p className=" lh-copy pt0 mt0 f6 fw5 black-40 sans-serif  ">
      Is your concern a company or foundation?
    </p>
  </div>;
};
