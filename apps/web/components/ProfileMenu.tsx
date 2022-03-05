import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { authApi, useLogoutMutation } from '../app/services/auth';
import { store } from '../app/store';
import { useAuth } from '../hooks/useAuth';
import LoginDialogForm from './Authentication/LoginDialogForm';
import StyledDialog from './Dialog';

const ProfileMenu = () => {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const session = useAuth();

  const handleLogout = () => {
    store.dispatch(authApi.endpoints.logout.initiate(null));
  }

  return (
    <>
      {!session.user && <>
        <button onClick={() => setShowLoginDialog(true)} className='p-1 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-zinc-700/80 rounded-full transition-all'>
          <FaUserCircle className='h-7 w-7 dark:text-gray-300' />
        </button>
        <StyledDialog 
          isOpen={showLoginDialog} 
          handleClose={() => setShowLoginDialog(false)}
          className='max-w-xs p-6 text-left transition-all bg-slate-200 dark:bg-zinc-900 dark:border dark:border-zinc-800 rounded-xl shadow-xl'
        >
          <LoginDialogForm
            onSubmit={() => setShowLoginDialog(false)}
          />
        </StyledDialog>
      </>}
      {session.user && <>
        <Menu as='div' className='relative'>
          <Menu.Button className='p-1 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-zinc-700/80 rounded-full transition-all'>
            <FaUserCircle className='h-7 w-7 dark:text-gray-300' />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-90'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-50'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-90'
          >
            <Menu.Items className='absolute right-0 m-1 bg-slate-300 dark:bg-zinc-700 p-2 pl-4 flex flex-col rounded-lg shadow-md text-sm font-semibold text-right'>
              <Menu.Item>
                <Link href='/admin'>
                  Admin
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href='/settings'>
                  Settings
                </Link>
              </Menu.Item>
              <Menu.Item>
                <button className='font-semibold text-right' onClick={() => handleLogout()}>
                  Logout
                </button>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </>}
    </>
  )
}

export default ProfileMenu;