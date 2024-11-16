import { cookies } from "next/headers";
import { SubmitButton } from "../_components/form/submit-button";
import { login } from "@/lib/actions/user/login-user";


const LoginPage = async () => {
    const csrfToken = (await cookies()).get("authjs.csrf-token")?.value ?? "";

  return (
    <>
           <form
          action={login}
        >
          <input type="hidden" name="csrfToken" value={csrfToken} />
            <div className='flex flex-col gap-1'>
            <span className="label-text">Email</span>
            <input id='email' name='email' type="text" placeholder="Email" className="input input-bordered w-full" />
             </div>
             <div className='flex flex-col gap-1'>
             <span className="label-text">Password</span>
            <input name='password' id='password' type="password" placeholder="Password..." className="input input-bordered w-full" />
                <SubmitButton label='Login' />
             </div>
        </form>
    </>
  )
}

export default LoginPage