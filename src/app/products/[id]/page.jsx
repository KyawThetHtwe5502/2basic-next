import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Page = async ({params}) => {
 const {id} = await params;
 const res = await fetch(`https://fakestoreapi.com/products/${id}`);
 const json = await res.json();
  return (
    <div className='border mt-5 p-5 space-y-5'>
        <h1 className='text-3xl font-bold'>{json.title} </h1>
        <Image src={json.image} width={200} height={200} alt={json.image} />
        <p>{json.description}</p>
        <p>{json.price}</p>
        <hr />
        <Link href={'/products'} className='text-blue-600 underline'>back</Link>
    </div>
  )
}

export default Page