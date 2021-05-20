import React from "react";
import withAuth from "../components/hocs/withAuth";

function Secret({ auth }) {
  return (
    <div>
      <h1>Secret Page</h1>
    </div>
  );
}

export default withAuth(Secret);
