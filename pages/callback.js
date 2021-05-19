import { withRouter } from "next/router";
import React, { useEffect } from "react";
import auth0Client from "../services/auth0";

function Callback({ router }) {
  useEffect(async () => {
    try {
      await auth0Client.handleAuthentication();
      router.push("/");
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  return (
    <div>
      <h1 className="text-info">Loading data ...</h1>
    </div>
  );
}

export default withRouter(Callback);
