import React from "react";

export default function (Component) {
  return function ({ auth, ...rest }) {
    return auth.isAuthentication ? (
      <Component {...rest} />
    ) : (
      <div>
        <h1>You are not authenticated. Please Login to access this page.</h1>
      </div>
    );
  };
}
