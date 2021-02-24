import React from "react";
import "./assets/css/style.css";
// import "./assets/css/tachyons.css";

import Companies from "./pages/companies.js";
import New_Company from "./pages/new_company.js";

import Apeq from "./modules";
// import Wrappers from "./modules/Containers/";
// import AppContext from "./modules/Context/context.js";
// import { Nav, Image, Drawer } from "apeq-ui";

import data from "./data/index.js";

const { Wrappers, Ui, Forms, AppContext } = Apeq;
const { Main, Auth, Data, Ui_, Controls, Audio } = Wrappers;
const { Nav, Image, Drawer, List } = Ui;

//streamkit

class App2 extends React.Component {
  // static contextType = AppContext;

  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      slides: [],
      nudge: false,
      drawer: false
    };
  }

  render() {
    console.log("data 1 : ", data);

    const { images, companies } = data;

    console.log("Context : ", this);

    console.log("List => ", List);
    // const { Data, Ui } = this.context;

    // console.log("Data component : ", Data);

    return (
      <>
        {/* <AppContext.Consumer>
        {(props) => (
          console.log("Consumer props ", props),
          (
            <></>
          )
        )}
      </AppContext.Consumer> */}
        <>
          <section
            id="Main"
            className={this.state.nudge ? " open trans-a " : " closed trans-a "}
          >
            <Overlay />

            <Sidebar_Right images={images} self={this} context={this.context} />

            <section
              id=""
              className=" sans-serif w-30 relative db bg-near-white h-100 flex-"
            >
              <div className=" flex flex-column ph5 mw7 center ">
                <h1 className=" f6 ttu tracked fw7 green sans-serif pt5 pb0 ">
                  Start
                </h1>
                <p className=" pt0 mt0 f6 fw5 black-40 sans-serif ">
                  Register a new company or foundation.
                </p>
              </div>
              {this.state.active === 0 ? (
                <New_Company
                  active={this.state.active}
                  self={this}
                  context={this.context}
                />
              ) : (
                <Companies
                  active={this.state.active}
                  data={data}
                  self={this}
                  context={this.context}
                />
              )}
              <div className=" flex flex-column ph5 left pt3 flex-auto mw5 w-100 pb5">
                <button
                  onClick={() => {
                    this.setState({
                      active:
                        this.state.active <= images.length
                          ? this.state.active + 1
                          : 0
                    });
                  }}
                  className="  f5 fw6 sans-serif pv2 flex left h-100 items-center justify-center bg-white green bn bw1 b--black-70 br2 ttc pointer dim shadow-1 hover-shadow-2 mr3 ph3    "
                >
                  Next
                </button>
              </div>
            </section>
          </section>

          <Drawer active={this.state.drawer}>
            <List
              active={this.state.drawer}
              items={companies}
              self={this}
              classes={" w-100 left "}
            />
          </Drawer>
        </>
      </>
    );
  }
}

export default App2;

// App2.contextType = AppContext;
// const List = ({ items, self }) => (
//   <>
//     <section
//       id="List-01"
//       className=" w-70 fixed right-0 top-0 flex flex-column-ns flex-column col-3-ns col-3 mw8 pa5  "
//       style={{
//         zIndex: "1005"
//       }}
//     >
//       {items.length > 0 ? (
//         items.map((item, index) => (
//           <>
//             <section
//               onClick={(item) => {
//                 // console.log("Context : ", context);
//                 // console.log("Self : ", self);
//                 self.setState({
//                   drawer: !self.state.drawer,
//                   nudge: !self.state.nudge
//                 });
//                 // context.Ui.self.setState({ nudge: true });
//               }}
//               id=""
//               className="col flex flex-row w-100 mb4 "
//             >
//               <Image type={"avatar"} size={"small"} url={item.image} />

//               <div className=" sans-serif flex flex-column f5 fw6 white -black mt3 mr3 ml3">
//                 {item.title}
//               </div>
//               <div className="  sans-serif flex flex-column f6 fw3 white -black mt3 mb4">
//                 {item.description}
//               </div>
//             </section>
//           </>
//         ))
//       ) : (
//         <>{"No data ..."}</>
//       )}
//     </section>
//   </>
// );
const Wrapper = (props) => {
  <>{this.props.children}</>;
};

const Sidebar_Right = ({ images, self, context }) => (
  <>
    <div
      className=" bg-center bg-cover h-100 w-70 fixed right z-999"
      id="Sidebar-Right "
      style={{
        background:
          'url("' +
          images[
            self.state.active > images.length
              ? self.state.index
              : self.state.active
          ] +
          '")'
      }}
    />
  </>
);

// const slide_state = ({ images, state }) => {
//   let index = 0;

//   let restart = state.active > images.length;

//   // let active = state.active <= images.length ? state.active : Math.round( state.active / images.length )

//   let index_ = state.active > images.length ? index : state.active;
//   //  let index_ = restart ? index : ( Math.round( state.active / images.length ) )

//   return images[state.active > images.length ? index : state.active];
// };

//  const X = () => {
//    <div className=" flex ph5 " >
//           <img
//             className=" flex h4 br3 w-100 bg-cover bg-center mw7 center "
//             style={{
//               background:
//                 "url('https://images.pexels.com/photos/4992770/pexels-photo-4992770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
//             }}
//           />

//           </div>
//  }

const Overlay = () => (
  <div
    className=" overlay w-70 vh-100 right fixed bg-white-70 o-05-"
    style={{
      zIndex: "1002",
      background: "linear-gradient(180deg, #9e9e9e, #ffffff73)"
    }}
  ></div>
);
