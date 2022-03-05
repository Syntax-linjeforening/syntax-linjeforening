const InternalErrorPage = () => {
  return (
    <div className='flex flex-row h-full items-center justify-center space-x-2 divide-x divide-gray-400 dark:divide-zinc-600'>
      <h1 className='text-5xl font-semibold'>
        500
      </h1>
      <p className='pl-2 py-2 text-sm'>
          En intern feil har oppstått. <br />
          Gå til <a className='border-b border-orange-500 cursor-pointer' href='/'>hjem.</a>
      </p>
    </div>
  )
}

export default InternalErrorPage;