import { BsFacebook, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='py-4 dark:text-white text-gray-600'>
      <p className='text-center font-semibold text-sm pb-1'>
        Følg oss på sosiale medier!
      </p>
      <div className='flex flex-row items-center justify-center space-x-4'>
        <BsFacebook className='w-8 h-8 cursor-pointer'/>
        <BsInstagram className='w-8 h-8 cursor-pointer' />
      </div>
    </footer>
  );
}

export default Footer;