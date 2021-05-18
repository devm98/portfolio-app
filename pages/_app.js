import BaseLayout from "../components/layouts/BaseLayout";
import "../public/styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Auth0Provider
      domain="dev-zpiibok9.us.auth0.com"
      clientId="BbxrRXdW9BtuJtST2IB85CyBMhKmagSR"
      redirectUri="http://localhost:3000/callback"
    >
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </Auth0Provider>
  );
}

export default MyApp;
