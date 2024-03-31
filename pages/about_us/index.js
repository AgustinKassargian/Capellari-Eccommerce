import React from 'react';
import ContactForm from '../../components/AboutUs/ContactForm';
import Image from 'next/image';

function AboutUs() {
  return (
    <div className='bg-slate-50 min-h-[80vh] font-main container max-w-screen-2xl text-black p-8'>
    <div className="mb-8">
        <h1 className="text-3xl font-bold">Who we are?</h1>
        <hr className='mb-4'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus ipsum, aliquam in metus maximus, convallis bibendum urna. Donec consequat lorem quis nibh luctus gravida. Proin ullamcorper porta lacus id aliquam. Aenean lorem turpis, facilisis quis mauris eget, finibus condimentum sapien. Phasellus vel quam eros. Curabitur tempus ante in nibh auctor vulputate. Sed viverra felis in velit convallis, feugiat cursus erat ullamcorper. Aliquam facilisis orci vitae lacus vulputate, et aliquet dolor efficitur.
Suspendisse commodo eros eu diam pulvinar laoreet. Nulla orci urna, faucibus ut turpis sit amet, elementum pulvinar nisi. Nunc egestas volutpat dui nec sollicitudin. Integer sit amet eros vehicula, laoreet ante nec, convallis turpis. Proin dignissim erat quis nibh vulputate, nec ullamcorper risus vestibulum. Proin mattis aliquam nisi in sollicitudin. Vestibulum et dapibus eros. Nulla faucibus ac lorem vitae facilisis. Duis ac tristique risus, vel sodales tortor. Aliquam ut placerat sapien, nec posuere enim. Sed auctor enim et arcu ultricies, ac maximus mi molestie. Vestibulum sem metus, tempor vitae nunc vel, efficitur sodales justo. Aenean ultrices aliquet eros a tincidunt. Morbi iaculis lorem in lorem interdum, ut tempor neque interdum.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Where to find us?</h2>
        <hr className='mb-4'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus ipsum, aliquam in metus maximus, convallis bibendum urna. Donec consequat lorem quis nibh luctus gravida. Proin ullamcorper porta lacus id aliquam. Aenean lorem turpis, facilisis quis mauris eget, finibus condimentum sapien. Phasellus vel quam eros. Curabitur tempus ante in nibh auctor vulputate. Sed viverra felis in velit convallis, feugiat cursus erat ullamcorper. Aliquam facilisis orci vitae lacus vulputate, et aliquet dolor efficitur.</p>
        <ul className='flex gap-4 mt-4'>
            <Image
                alt='icon'
                width={50}
                height={50}
                src={'/facebook.png'}
                className='cursor-pointer'

            />
            <Image
                alt='icon'
                width={50}
                height={50}
                src={'/instagram.png'}
                className='cursor-pointer'

            />
            <Image
                alt='icon'
                width={50}
                height={50}
                src={'/x_twitter.png'}
                className='cursor-pointer'

            />
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Also you can contact us filling the next form.</h2>
        <hr className='mb-4'/>
        <ContactForm />
      </div>
    </div>
  );
}

export default AboutUs;

