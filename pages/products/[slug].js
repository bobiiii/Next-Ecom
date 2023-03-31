import React from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Link from 'next/link';
import Image from 'next/image';

export default function ShowProduct() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((item) => item.slug === slug);

  if (!product) {
    return <div> product not found</div>;
  }

  return (
    <Layout title={product.title}>
      <div className="py-2  ">
        <Link href={'/'}>Back to Products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            alt={product.title}
            src={`${product.img}`}
            width={640}
            height={640}
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.title}</h1>
            </li>
            <li>{product.brand}</li>
            <li>
              {product.rating} of {product.numreviews} reviews
            </li>
            <li>{product.desc}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-evenly  ">
              <div>Price</div>
              <div>{product.price}</div>
            </div>

            <div className=" mb-2 flex justify-evenly">
              <div>Status</div>
              <div>
                {product.countInStock > 0
                  ? product.countInStock
                  : 'Out-of-Stock'}
              </div>
            </div>
            <button className="primary-button w-full">Add To Cart</button>
          </div>
        </div>{' '}
      </div>
    </Layout>
  );
}
