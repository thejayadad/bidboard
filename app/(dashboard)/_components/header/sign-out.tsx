
import { signOut } from '@/auth';
import React from 'react'

const SignOut = async () => {
  return (
    <form
    action={async () => {
      "use server";
      await signOut();
    }}
  >
    <button className='mr-4 text-sm text-blue-400' type="submit">
      LogOut
    </button>
  </form>
  )
}

export default SignOut