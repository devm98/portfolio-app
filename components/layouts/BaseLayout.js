import React from "react";
import Header from "../shared/Header";

function BaseLayout(props) {
  return (
    <div className="layout-container">
      <Header />
      <main className="cover">
        <div className="wrapper">
          {props.children}
        </div>
      </main>
    </div>
  );
}

export default BaseLayout;
