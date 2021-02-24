import React from "react";

import { images, companies } from "../data";
import List from "../modules/Ui/Layout/Lists/list";
import Image from "../modules/Ui/Image/image";
// import Companies from './Companies.js'
// import New_Company from './new_company.js'

class Companies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nudge: false,
      drawer: false
    };
  }

  render() {
    // console.log("Companies_ ", Companies_);
    // alert();
    console.log("List", List);
    const { context, self, data, active } = this.props;
    const { companies } = data;

    return (
      <section
        id=""
        className=" -fixed bottom-0-sleft-0 sans-serif w-30 relative db bg-white h-100 flex-"
      >
        <div className=" flex flex-column ph5- mw7 left mb3 ">
          <h1 className=" f6 ttu tracked fw7 green sans-serif pt4 pb0 ">
            Companies
          </h1>
          <p className=" pt0 mt0 f6 fw5 black-40 sans-serif ">Your Companies</p>
        </div>

        <List
          active={active}
          items={companies}
          self={self}
          classes={" w-70 right "}
        />
      </section>
    );
  }
}

export default Companies;
// Companies.contextType = app;
