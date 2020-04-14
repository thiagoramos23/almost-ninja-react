import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import NavigationBar from '../src/components/NavigationBar/NavigationBar';
import '../css/tailwind.css';
import '../misc/fontAwesomeLibrary';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div id="root">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
            rel="stylesheet"
            key="google-fonts"
          />
        </Head>
				<div id="root">
          <NavigationBar />
          <div>
            <Component {...pageProps} />
          </div>
				</div>
      </div>
    );
  }
}

export default MyApp;
