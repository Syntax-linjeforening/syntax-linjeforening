import { AppProps } from 'next/dist/shared/lib/router/router';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Header from '../components/Header';
import { NavigationLinks } from '../content/NavigationLinks';
import '../styles/globals.css';

const Application = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <div className='h-screen max-h-screen overflow-hidden xl:px-64 flex flex-col'>
        <Header navData={NavigationLinks} />
        <main className='flex-1 overflow-y-auto'>
          <Component {...pageProps}/>
        </main>
        {/* <Footer />  */}
      </div>
    </Provider>
  );
}

export default Application;