
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '@/components/Home/Banner'


export default function Home() {
  return (
   <div className="font-main container h-auto min-h-[80vh] flex flex-col m-auto max-w-screen-2xl items-center justify-center text-sm relative z-0">
     <h1>Electrodomesticos Capellari</h1>
     <h2 className='font-main'>Lo ultimo en electrodomesticos en un solo lugar</h2>
     <Banner/>
  </div>
  )
}
