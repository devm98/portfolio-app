import { useRouter } from "next/router";
import React from "react";
import Header from "../shared/Header";

function BaseLayout({ auth, children, ...rest }) {
  const router = useRouter();


  return (
    <div className="layout-container">
      <Header auth={auth} />
      <main className={`cover ${router.route !== "/" ? " cover-diff" : "" }`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
}

export default BaseLayout;
