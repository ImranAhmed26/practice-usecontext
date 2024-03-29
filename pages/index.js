import Head from "next/head";
import styles from "../styles/Home.module.css";
import Main from "../components/main";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UseContext Practice</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Footer />
    </div>
  );
}
