import React from 'react';
import { useForm } from 'react-hook-form';

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border rounded-lg p-4 shadow-md">
        <div>
            <label className='font-semibold' htmlFor="email">Email<span className='text-red-500'>*</span></label>{errors.email && <span className="text-red-500 ml-2 italic">(This field is required).</span>}
            <input placeholder='example@mail.com' type='email' id="email" {...register("email", { required: true })} className="border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div>
            <label className='font-semibold' htmlFor="phone">Phone</label><span className='text-slate-500 ml-2 italic'>(This is an optional field.).</span>
            <input type='tel' placeholder='(###) ####-####' id="phone" {...register("phone")} className="border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div>
            <label className='font-semibold' htmlFor="subject">Subject<span className='text-red-500'>*</span></label>{errors.subject  && <span className="text-red-500 ml-2 italic">(This field is required).</span>}
            <input placeholder='subject' type='text' id="subject" {...register("subject", {required:true})} className="border-gray-300 rounded-md p-2 w-full" />  
        </div>
        <div>
            <label className='font-semibold' htmlFor="detail">Detail<span className='text-red-500'>*</span></label>{errors.detail  && <span className="text-red-500 ml-2 italic">(This field is required).</span>}
            <input placeholder='detail' type='text' id="detail" {...register("detail", {required:true})} className="border-gray-300 rounded-md p-2 w-full" />
        </div>
        <hr/>
      <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded-md">Enviar</button>
    </form>
  );
}

export default ContactForm;

