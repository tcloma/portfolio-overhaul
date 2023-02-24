'use client'
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInputs {
    name: string,
    email: string,
    subject: string,
    message: string
}

export default function ContactForm() {
    const { handleSubmit, register, formState: { errors } } = useForm();

    const submitData: SubmitHandler<IFormInputs> = (data) => {
        console.log(data)
    }

    return (
        <>
            <form className='flex flex-col justify-center items-center gap-2 w-full' onSubmit={handleSubmit(submitData)}>
                <div className='flex gap-2 w-full'>
                    <div>
                        <input
                            className='input w-full input-bordered'
                            placeholder='Name'
                            type="text"
                            {...register('name', { required: 'Name is required', maxLength: 50 })}
                        />
                    </div>

                    <input className='input w-full input-bordered' type="text" placeholder='Email' {...register('email', { required: true })} />

                </div>
                <input className='input w-full input-bordered' type="text" placeholder='Subject' {...register('subject', { required: true })} />
                <textarea className='textarea w-full textarea-bordered' placeholder='Message' {...register('message', { required: true })} />
                <button type='submit' className='btn w-full btn-secondary'> Submit</button>
            </form>
            <div>
                {errors.name?.type === 'required' && <p role="alert">Name is required</p>}
                {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
                {errors.subject?.type === 'required' && <p role="alert">Subject is required</p>}
                {errors.message?.type === 'required' && <p role="alert">Message is required</p>}
            </div>
        </>

    )
}