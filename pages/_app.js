import BaseLayout from "../components/layouts/BaseLayout";
import "../public/styles/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}

export default MyApp;
