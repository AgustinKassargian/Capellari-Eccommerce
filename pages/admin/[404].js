import { useRouter } from 'next/router'
import Image from 'next/image'

export default function NotFound() {
  const router = useRouter()
  return (
    <div className='bg-slate-50 min-h-[80vh] font-main container max-w-screen-2xl text-black p-8'>
      <div className='flex flex-col justify-center items-center font-main text-2xl'> 
      <h1>ERROR</h1>
        <Image
          src={'/404.png'}
          alt='404'
          width={200}
          height={200}
          />
        <p>Could not find requested resource</p>
        <button className='text-lg bg-orange-500 text-white font-bolder rounded-lg p-1 mt-4 hover:bg-orange-600' onClick={()=>router.push('/')}> Back to home</button>
      </div>
    </div>
  )
}