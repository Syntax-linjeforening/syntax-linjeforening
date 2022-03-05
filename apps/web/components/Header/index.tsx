import Image from 'next/image';
import Link from 'next/link';
import SyntaxLogo from '../../public/syntax-logo.png';
import ProfileMenu from '../ProfileMenu';
import ThemeToggler from '../ThemeToggler';

export interface NavigationData {
  href: string;
  title: string;
  children?: NavigationData[];
}

interface HeaderProps {
  navData: NavigationData[];
}

const Header = ({ navData }: HeaderProps) => {
  return (
    <nav className='flex flex-row items-center justify-between pt-8 pb-4 border-b border-slate-300 dark:border-zinc-600 px-8'>
      <Link href='/'>
        <div className='inline-flex items-center cursor-pointer'>
          <Image src={SyntaxLogo} height={64} width={64} />
          <div>
            <h1 className='text-2xl tracking-[.2rem] font-ropa uppercase'>
              Syntax
            </h1>
            <p className='text-xs font-ropa uppercase tracking-widest -mt-1.5'>
              Linjeforening
            </p>
          </div>
        </div>
      </Link>

      <ul className='flex flex-row space-x-4 uppercase'>
        {navData.map((link, idx) => (
          <Link href={link.href} key={idx}>
            <p className='border-b-0 hover:border-b border-orange-400 transition-all cursor-pointer font-semibold'>
              {link.title}
            </p>
          </Link>
        ))}
      </ul>

      <section className='flex flex-row items-center space-x-4'>
        <ThemeToggler />
        <ProfileMenu />
      </section>
    </nav>
  );
}

export default Header;