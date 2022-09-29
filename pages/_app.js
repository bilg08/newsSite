import LayOut from '../LayOut/LayOut';
import '../styles/globals.css';
import { SideBarContextProvider } from '../context';
import { ThemeContextProvider } from '../theme/themeProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <SideBarContextProvider>
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </SideBarContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp
