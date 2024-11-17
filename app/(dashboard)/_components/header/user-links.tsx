import React from 'react'
import SignOut from './sign-out'
import Social from './social';
import Link from 'next/link';

interface Props {
    name: string;
    id: string;
}


const UserLinks = ({name, id}: Props) => {
  return (
    <div className='flex items-center space-x-3'>
    <p>hi, <span className='text-blue-600 mr-2'>{name}</span></p> |
    <p className='text-blue-600'><span className='mr-4'>
        <Link href={`/dashboard/${id}`}>
            Settings
        </Link>
        </span></p> |
    <SignOut /> |
    <div>
        <Social />
    </div>
</div>
  )
}

export default UserLinks