import React from "react";
import Image from "../../Image/image";
const List = ({ items, self, classes, active }) => (
  console.log("List loaded ", items, self),
  (
    // alert(),
    <>
      <section
        id="List-01"
        className={
          " w-70 fixed right-0 top-0 flex flex-column-ns flex-column col-3-ns col-3 mw8 pa5  " +
          classes
        }
        style={{
          zIndex: "1005"
        }}
      >
        {active && items.length > 0 ? (
          items.map((item, index) => (
            <>
              <section
                onClick={(item) => {
                  // console.log("Context : ", context);
                  // console.log("Self : ", self);
                  self.setState({
                    drawer: !self.state.drawer,
                    nudge: !self.state.nudge
                  });
                  // context.Ui.self.setState({ nudge: true });
                }}
                id=""
                className="scale-up-center col flex flex-row w-100 mb4 "
              >
                <Image type={"avatar"} size={"small"} url={item.image} />

                <div className=" sans-serif flex flex-column f5 fw6 white -black mt3 mr3 ml3">
                  {item.title}
                </div>
                <div className="  sans-serif flex flex-column f6 fw3 white -black mt3 mb4">
                  {item.description}
                </div>
              </section>
            </>
          ))
        ) : (
          <>{"No data ..."}</>
        )}
      </section>
    </>
  )
);

export default List;
