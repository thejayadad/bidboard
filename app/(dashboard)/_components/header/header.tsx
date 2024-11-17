import Logo from '@/components/logo/logo'
import { getSession } from '@/lib/getSession';
import React from 'react'
import UserLinks from './user-links';
import SignIn from './sign-in';

const Header = async () => {
    const session = await getSession();
    const name = session?.user?.name;
    const id = session?.user?.id
  return (
    <header className='border-b w-full'>
        <nav className='flex items-center max-w-screen-xl mx-auto p-4 justify-between'>
            <div>
                <Logo />
            </div>
          {session ? (
            <>
             <UserLinks id={id} name={name} />
            </>
          ):

          (
            <>
            <SignIn />
            </>
          )

        }
        </nav>
    </header>
  )
}

export default Header