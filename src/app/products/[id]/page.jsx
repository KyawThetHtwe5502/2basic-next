import React from 'react'

const Page = async ({params}) => {
 const {id} = await params;
  return (
    <div>
        <h1 className='p-5 border border-gray-500'>My Product is {id} </h1>
    </div>
  )
}

export default Page