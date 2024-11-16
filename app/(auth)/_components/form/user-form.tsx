'use client'

import { register } from "@/lib/actions/user/register-user"
import { SubmitButton } from "./submit-button"


const UserForm = () => {
  return (
    <form action={register}>
             <div className='flex flex-col gap-1'>
            <span className="label-text">UserName</span>
            <input name='name' id='name' type="text" placeholder="Username..." className="input input-bordered w-full" />
             </div>
            <div className='flex flex-col gap-1'>
            <span className="label-text">Email</span>
            <input name='email' id='email' type="text" placeholder="Email..." className="input input-bordered w-full" />
             </div>
             <div className='flex flex-col gap-1'>
             <span className="label-text">Password</span>
            <input name='password' id='password' type="password" placeholder="Password..." className="input input-bordered w-full" />
                <SubmitButton label='Register' />
             </div>
    </form>
  )
}

export default UserForm