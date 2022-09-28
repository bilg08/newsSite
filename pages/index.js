import styles from '../styles/main.module.css';
import  BlogPage  from './blogPage/blogPage';
import Head from "next/head";
import { SideBarContextProvider } from '../context';
import { Header, SideBar } from '../components';

export default function App() {
  return (
    <SideBarContextProvider>
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className={styles.container}>
          <div className={styles.mainContainer}>
            <Header/>
            <BlogPage />
            <SideBar/>
          </div>
        </div>
      </>
    </SideBarContextProvider>
  );
}
