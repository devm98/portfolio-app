import "bootstrap/dist/css/bootstrap.min.css";
import BaseLayout from "../components/layouts/BaseLayout";
import "../public/styles/main.scss";
import auth0Client from "../services/auth0";

function MyApp({ Component, pageProps, auth }) {
  console.log("auth",auth);

  return (
    <BaseLayout auth={auth}>
      <Component {...pageProps} auth={auth} />
    </BaseLayout>
  );
}

MyApp.getInitialProps = async () => {
  const { isAuthenticated } = auth0Client;
  const user = await isAuthenticated();

  return {
    auth: {
      user,
      isAuthenticated: !!user,
    },
  };
};

export default MyApp;
