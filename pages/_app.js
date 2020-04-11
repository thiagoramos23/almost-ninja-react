import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import '../css/tailwind.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div id="root" className="text-gray-800 bg-gray-100">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
            rel="stylesheet"
            key="google-fonts"
          />
        </Head>
				<div id="root">
					<Component {...pageProps} />
				</div>
      </div>
    );
  }
}

export default MyApp;
