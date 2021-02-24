import React from "react";

import { Audio, Auth, Ui, Controls, Data, Socket } from "./";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Auth>
        <Data>
          <Socket>
            <Controls>
              <Ui>
                <Audio>{this.props.children}</Audio>
              </Ui>
            </Controls>
          </Socket>
        </Data>
      </Auth>
    );
  }
}

export default Main;
