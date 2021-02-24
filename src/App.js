import React from "react";
import "./assets/css/style.css";
import "./assets/css/tachyons.css";

export default function App() {
  return (
    <>
      <div className=" flex flex-column ph5 mw7 left ">
        <h1 className=" f4 fw7 black sans-serif pt5 pb2 ">
          UNIT Investment Platform
        </h1>
        <p className=" f5 fw5 black sans-serif ">
          UNIT Investment platform is a platform for exposing high-potential
          startups to investors of all calibers.
        </p>
      </div>
      <div className=" flex flex-column ph5 mw7 left ">
        <h1 className=" f4 fw7 black sans-serif pt5 pb2 ">VirtaQ</h1>
        <p className=" f5 fw5 black sans-serif ">
          Digital dynamic real-time virtual company shareholding management.
        </p>
        <p className=" f5 fw5 black sans-serif ">Go pro.</p>
      </div>
      <div className=" flex flex-column ph5 mw7 left ">
        <h1 className=" f4 fw7 black sans-serif pt5 pb2 ">
          Ajenda Business Design
        </h1>
        <p className=" f5 fw5 black sans-serif ">
          Business design & development using stories & journeys.
        </p>
        <p className=" f5 fw5 black sans-serif ">
          Track your progress, create rewards.
        </p>
      </div>
    </>
  );
}
