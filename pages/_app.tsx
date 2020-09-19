import App, { AppContext, AppInitialProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import { wrapper } from '../store';
import '../styles/globals.css';

class BlogApp extends App<AppInitialProps> {
    public static getInitialProps = async ({ Component, ctx }: AppContext) => ({
        pageProps: {
            // Call page-level getInitialProps
            ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
            // Some custom thing for all pages
            pathname: ctx.pathname,
        },
    });

    public render() {
        const { Component, pageProps } = this.props;

        return (
            <div>
                <Head>
                    <title>Simple Blog</title>
                </Head>
                <h1>Simple Blog</h1>
                <Component {...pageProps} />
            </div>
        );
    }
}

export default wrapper.withRedux(BlogApp);
