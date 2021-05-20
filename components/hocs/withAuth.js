import React from "react";

export default function withAut(Component) {
  return function ({ auth, ...rest }) {
    return auth.isAuthenticated ? (
      <Component auth={auth} {...rest} />
    ) : (
      <div>
        <h1 className="text-info">You are not authenticated. Please Login to access this page.</h1>
      </div>
    );
  };
}
