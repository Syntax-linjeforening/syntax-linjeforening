import { HiLocationMarker, HiMail, HiOutlineMail } from 'react-icons/hi';
import TextArea from '../../components/Form/TextArea';
import TextInput from '../../components/Form/TextInput';

const ContactPage = () => {
  return (
    <>
      <div className='py-8'>
        <div className='flex flex-col md:flex-row space-y-6 md:space-x-8 w-full justify-center items-center' >
          <div className='max-w-sm flex flex-col pt-8 justify-center'>
            <h2 className='text-3xl font-semibold'>
              Kontakt oss
            </h2>
            <div className='flex flex-col dark:text-zinc-400 py-2 space-y-2'>
              <p className='dark:text-zinc-300 pb-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae autem id cumque animi quasi obcaecati assumenda facilis a odio consectetur, tempore, dolores nesciunt? Consectetur, ipsam eligendi? Impedit accusamus vel odio.
              </p>
              <div className='inline-flex items-center space-x-1'>
                <HiLocationMarker className='w-6 h-6' />
                <p className=''>
                  Larsgårdsvegen 2, 6009 Ålseund
                </p>
              </div>
              <div className='inline-flex items-center space-x-1'>
                <HiOutlineMail className='w-6 h-6' />
                <p>post@syntax-linjeforening.no</p>
              </div>
            </div>
          </div>
          <div className='py-4 px-4 rounded-lg bg-slate-300 dark:bg-zinc-900 w-[32rem]'>
            <h2 className='text-2xl font-semibold'>
              Send en melding
            </h2>
            <div className='space-y-6 pt-6 flex flex-col'>
              <TextInput id='email' type='text' label='E-postadresse' />
              <TextInput id='name' type='text' label='Navn'/>
              <TextInput id='subject' type='text' label='Tema'/>
              <TextArea id='comment' label='Kommentar' resize='vertical' maxLength={500} />
              <button className='bg-orange-400 px-2 py-1 place-self-end rounded-md font-semibold transition-all text-white'>
                Send melding
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage;