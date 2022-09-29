import LayOut from '../LayOut/LayOut';
import '../styles/globals.css';
import { SideBarContextProvider } from '../context';
import { ThemeContextProvider } from '../theme/themeProvider';
import { NewsDatasContextProvider } from '../context/newsDatasContext';

function MyApp({ Component, pageProps }) {
  return (
    <NewsDatasContextProvider>
      <ThemeContextProvider>
        <SideBarContextProvider>
          <LayOut>
            <Component {...pageProps} />
          </LayOut>
        </SideBarContextProvider>
      </ThemeContextProvider>
    </NewsDatasContextProvider>
  );
}

export default MyApp
