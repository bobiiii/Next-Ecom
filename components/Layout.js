import React from 'react';
import Head from 'next/head';
// import Link from 'next/link';
import Header from "./Header"
function Layout({children}) {
  return (
    <>
      <Head>
        {/* <title>{title ? title + ' - Cart.pk' : 'Cart.pk'}</title> */}
        {/* <meta name="description" content="Ecommerce Website" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header/>
      {children}
      
    </>
  );
}

export default Layout;
