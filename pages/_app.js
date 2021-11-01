import { RecoilRoot } from 'recoil';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <div id="modal" />
    </RecoilRoot>
  );
}

export default MyApp;
