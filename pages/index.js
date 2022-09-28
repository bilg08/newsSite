import styles from '../styles/main.module.css'
import { BlogPage } from './blogPage'
import Head from "next/head"
export default function App() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
      </Head>
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <BlogPage />
        </div>
      </div>
    </>
  );
}
