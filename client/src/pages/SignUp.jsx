import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='Enter your username...' id='username' className='bg-slate-100 p-3 rounded-lg' />
        <input type="email" placeholder='Enter your email...' id='email' className='bg-slate-100 p-3 rounded-lg' />
        <input type="password" placeholder='Enter your password...' id='password' className='bg-slate-100 p-3 rounded-lg' />
        <button className='bg-green-700 text-white p-3 rounded-lg uppercase hover:bg-green-600 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Already have an account?</p>
        <Link to="/sign-in">
          <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
