import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaFacebook, FaInstagram, FaUser } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useGetPostsQuery } from '../app/services/posts';
import SyntaxLogo from '../public/syntax-logo-white.png';

const HomePage = () => {
  const { data, isLoading } = useGetPostsQuery({
    take: 3
  });

  return (
    <div className="flex flex-col h-full items-center justify-center space-x-2">
      {isLoading && <>
        Loading posts...
      </>}
      {!isLoading && <>
        <h2 className='font-bold font-ropa tracking-wider text-2xl border-b border-slate-400 dark:border-zinc-600 mb-2 self-start ml-32'>
          Nytt elns
        </h2>
        <div className='grid grid-cols-3 gap-2'>
          {data.posts.map((post, idx) => (
            <div key={idx} className='bg-gray-200 hover:bg-gray-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-all p-2 rounded-lg cursor-pointer shadow-lg w-96'>
              <Link href={'/nyheter/' + post.slug}>
                <div className='flex flex-row items-center space-x-2 '>
                  <div className='flex items-center justify-center aspect-square w-24 bg-slate-300 dark:bg-zinc-700 rounded-md flex-shrink-0 text-center'>
                    a real image probably
                  </div>
                  <div className='flex flex-col overflow-hidden'>
                    <h1 className='font-semibold truncate'>
                      {post.title}
                    </h1>
                    <div className='flex-1'>
                      <p>
                        brief goes here
                      </p>
                      <div className="inline-flex items-center space-x-1 text-gray-600 dark:text-gray-300">
                        <FaUser className='' />
                        <p>
                          {post.author.name}
                        </p>
                        <FaCalendar />
                        <p>
                          {new Date(post.published_at).toLocaleDateString('no-NO')}
                        </p>
                    </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </>}
    </div>
  )
}

const HomePageStatic = () => {
  return (
    <main className='h-screen w-screen bg-black flex flex-col items-center justify-center text-white p-2'>
      <Head>
        <title>Syntax linjeforening</title>
      </Head>
      <div className='flex flex-col items-center space-y-6'>
        <Image src={SyntaxLogo} height={256} width={256} />
        <h1 className='font-ropa uppercase tracking-[.5rem] text-3xl'>
          Syntax
        </h1>
      </div>
      
      <p className='font-semibold text-center text-lg mt-4'>
        Dette nettstedet er under konstruksjon!
      </p>

      <p className='text-lg text-center py-2'>
        Inntil videre kan du nå oss på sosiale medier eller e-post.
      </p>

      <div className='inline-flex items-center justify-center space-x-3 py-2'>
        <a
          className='p-2 bg-orange-500 rounded-full hover:bg-orange-600 transition-all' 
          href='https://www.facebook.com/SyntaxAalesund'
          target='_blank'
          rel='noreferrer'
        >
          <FaFacebook className='h-6 w-6 cursor-pointer'/>
        </a>
        <a
          className='p-2 bg-orange-500 rounded-full hover:bg-orange-600 transition-all' 
          href='https://www.instagram.com/syntax_linjeforening'
          target='_blank'
          rel='noreferrer'
        >
          <FaInstagram className='h-6 w-6 cursor-pointer'/>
        </a>
        <a
          className='p-2 bg-orange-500 rounded-full hover:bg-orange-600 transition-all' 
          href='mailto:post@syntax-linjeforening.no'
        >
          <HiOutlineMail className='h-6 w-6 cursor-pointer'/>
        </a>
        
      </div>

    </main>
  )
}

export default HomePage;