import React from "react";
import Header from "../shared/Header";

function BaseLayout({ auth, children, ...rest }) {
  return (
    <div className="layout-container">
      <Header auth={auth} />
      <main className="cover">
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
}

export default BaseLayout;
