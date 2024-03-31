import React from 'react';
import Image from 'next/image';
function LogoCardsBox() {
    return (
        <div className='flex flex-col'>
            <label className='font-main text-xl text-start'>Medios de Pago</label>
            <label className='font-main text-lg text-start mt-4 mb-2'>Tarjetas de Cretido</label>
            <div className='flex gap-2'>
                <Image
                    src={'/visa.png'}
                    width={50}
                    height={50}
                    alt='visa'
                    title='Visa'
                    />
                <Image
                    src={'/american-express.png'}
                    width={50}
                    height={50}
                    alt='american-express'
                    title='American Express'
                    />
                <Image
                    src={'/Mastercard.png'}
                    width={50}
                    height={50}
                    alt='mastercard'
                    title='Mastercard'
                    />
            </div>
            <label className='font-main text-lg text-start mt-4 mb-2'>Tarjetas de Debito</label>
            <div className='flex gap-2'>
                <Image
                    src={'/visadebito.svg'}
                    width={50}
                    height={50}
                    alt='visadebito'
                    title='VisaDebito'
                    />
                <Image
                    src={'/mastercardebito.svg'}
                    width={50}
                    height={50}
                    alt='mastercardDebito'
                    title='MasterCard Debito'
                    />
                <Image
                    src={'/debitomaestro.svg'}
                    width={50}
                    height={50}
                    alt='debitomaestro'
                    title='Debito Maestro'
                    />
                <Image
                    src={'/Cabal.svg'}
                    width={50}
                    height={50}
                    alt='cabal'
                    title='cabal'
                    />
            </div>
            <label className='font-main text-lg text-start mt-4 mb-2'>Otross Medios de Pago</label>
            <div className='flex gap-2'>
                <Image
                    src={'/rapipgo.svg'}
                    width={50}
                    height={50}
                    alt='rapipago'
                    title='Rapipago'
                    />
                <Image
                    src={'/mercadopago.svg'}
                    width={50}
                    height={50}
                    alt='mercadopago'
                    title='MercadoPago'
                    />
                <Image
                    src={'/paypal.png'}
                    width={50}
                    height={50}
                    alt='paypal'
                    title='Paypal'
                    />
            </div>
        </div>
    )
}

export default LogoCardsBox
