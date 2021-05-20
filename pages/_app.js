import App from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseLayout from "../components/layouts/BaseLayout";
import "../public/styles/main.scss";
import auth0Client from "../services/auth0";

function MyApp({ Component, pageProps, auth }) {

  console.log("auth", auth);

  return (
    <BaseLayout auth={auth}>
      <Component {...pageProps} auth={auth} />
    </BaseLayout>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const { clientAuth, serverAuth } = auth0Client;
  const appProps = await App.getInitialProps(appContext);
  const user = process.browser ? await clientAuth() : await serverAuth(appContext.ctx.req);

  return {
    ...appProps,
    auth: {
      user,
      isAuthenticated: !!user,
    },
  };
};

export default MyApp;
