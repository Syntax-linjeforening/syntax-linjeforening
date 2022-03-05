import Image from "next/image";
import React, { useState } from "react";
import { HiKey, HiUser } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../app/auth/authSlice";
import { AuthenticationRequest, SuccessfulAuthentication, useLoginMutation } from "../../app/services/auth";
import SyntaxLogo from '../../public/syntax-logo.png';
import TextInput from "../Form/TextInput";

interface LoginDialogFormProps {
  onSubmit: () => void;
}

const LoginDialogForm = ({ onSubmit }: LoginDialogFormProps) => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState<AuthenticationRequest>({
    email: '',
    password: ''
  });

  const [login] = useLoginMutation();

  const handleChange = ({
    target: { name, value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  }

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const user = await login(formState).unwrap();
      if (user.__typename === 'UserAuthenticationWithPasswordSuccess') {
        
        dispatch(setCredentials({ session: (user as SuccessfulAuthentication).item }));
        onSubmit();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className='flex flex-col justify-center dark:text-white' onSubmit={handleLogin}>
      <div className='inline-flex items-center -ml-6 self-center'>
        <Image src={SyntaxLogo} height={64} width={64} />
        <h1 className='text-xl tracking-[.25rem] font-ropa uppercase'>
          Syntax
        </h1>
      </div>

      <h2 className='font-bold text-center text-lg pt-2'>
        Logg inn med din Syntax-konto
      </h2>

      <p className='text-center text-sm pt-1 pb-2'>
        eller <a className='text-orange-400 cursor-pointer'>klikk her</a> for å bli medlem
      </p>

      <div className='space-y-6 pt-4 pb-3 text-gray-800 dark:text-white'>
        <TextInput icon={<HiUser />} label='E-postadresse' id='email' type='text' onChange={handleChange} />
        <TextInput icon={<HiKey />} label='Passord' id='password' type='password' onChange={handleChange} />
      </div>

      <div className='flex flex-row justify-between text-sm mb-2'>
        <div className='inline-flex items-center space-x-1'>
          <input type='checkbox' id='remember-me' className='h-4 w-4 text-orange-400 focus:ring-orange-400 border-gray-300 rounded' />
          <label htmlFor='remember-me' className='select-none'>
            Husk meg
          </label>
        </div>

        <button className='text-orange-400'>
          Glemt passord?
        </button>
      </div>

      <button type='submit' className='bg-orange-400 rounded-md py-1 font-semibold my-1 transform transition-all w-full text-white'>
        Logg inn
      </button>
      
    </form>
  )
}

export default LoginDialogForm;