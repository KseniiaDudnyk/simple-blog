import Head from 'next/head';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
    <div>
        <Head>
            <title>Simple Blog</title>
        </Head>
        <h1>Simple Blog</h1>
        <Component {...pageProps} />
    </div>
);

export default MyApp;
