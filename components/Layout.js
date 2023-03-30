import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Cart.pk' : 'Cart.pk'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between items-center shadow-md px-4 ">
            <Link className="text-lg font-bold" href={'/'}>
              Cart.pk
            </Link>
            <div>
              <Link className="p-2" href={'/products'}>
                Products
              </Link>
              <Link className="p-2" href={'/cart'}>
                Cart
              </Link>
              <Link className="p-2" href={'/login'}>
                Login
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto px-4 mt-4">{children}</main>
        <footer className="h-10 flex justify-center items-center shadow-inner">
          Copyright @ 2023 Cart.pk
        </footer>
      </div>
    </>
  );
}

export default Layout;
