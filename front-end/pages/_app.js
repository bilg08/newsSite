import LayOut from '../LayOut/LayOut';
import '../styles/globals.css';
import { SideBarContextProvider } from '../context';
import { ThemeContextProvider } from '../theme/themeProvider';
import { NewsDatasContextProvider, LoadingContextProvider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <LoadingContextProvider>
      <NewsDatasContextProvider>
        <ThemeContextProvider>
          <SideBarContextProvider>
            <LayOut>
              <Component {...pageProps}/>
            </LayOut>
          </SideBarContextProvider>
        </ThemeContextProvider>
      </NewsDatasContextProvider>
    </LoadingContextProvider>
  );
}

export default MyApp
