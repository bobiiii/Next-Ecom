/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/products/${product.slug}`}>
        <img
          alt={product.title}
          src={product.img}
          className={'rounded shadow '}
        />
      </Link>
      <div className=" flex flex-col justify-center items-center">
        <Link href={`/products/${product.slug}`}>
          <h2 className="text-lg ">{product.title}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button className="primary-button h-1/5" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
