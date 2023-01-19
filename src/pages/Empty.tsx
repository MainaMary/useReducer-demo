import React from 'react'
import { Link } from 'react-router-dom';

interface Props {
    title: string;
}
const Empty = ({title}:Props) => {
  return (
    <div className='bg-white  w-1/2 my-16 shadow-md rounded-lg py-2 px-4 m-auto flex justify-center'>
      <div>
      <p className='my-8'>{title}</p>
       <button className='mb-8'>
       <Link to="/">Add items</Link>
       </button>
      </div>
    </div>
  )
}

export default Empty