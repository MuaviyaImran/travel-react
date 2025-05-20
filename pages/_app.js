import '../styles/globals.css';
import '../styles/components/navbar.scss';
import { Loading } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
