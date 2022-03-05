import { useRouter } from 'next/router';
import { useGetPostQuery } from '../../app/services/posts';

const NewsPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data: post, isLoading } = useGetPostQuery(slug as string);

  return (
    <>
      {isLoading && <>
        Loading...
      </>}
      {post && <>
        <div className='flex flex-col justify-center items-center py-8 space-y-2'>
          <div>
            <div className='aspect-video h-[32rem] bg-gradient-to-tr from-zinc-800 to-zinc-700 rounded-md flex justify-center items-center'>
              bilde elns
            </div>
            <div className='flex flex-row justify-between p-2'>
              <p className='text-zinc-400 text-sm'>
                Publisert: {new Date(post.published_at).toLocaleString('no-NO')}
              </p>
              <div className='inline-flex items-center space-x-2'>
                <div className='aspect-square h-6 bg-zinc-700 rounded-full' />
                <p className='text-zinc-400'>
                  {post.author.name}
                </p>
              </div>
            </div>
          </div>
          <h2 className='font-bold text-3xl border-b pb-1 px-2 border-zinc-600'>
            {post.title}
          </h2>
          <p>
            {JSON.stringify((post as any).content)}
          </p>
        </div>
      </>}
    </>
  );
}

export default NewsPage;