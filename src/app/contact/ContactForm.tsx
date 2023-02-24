'use client'
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface IFormInputs {
    name: string,
    email: string,
    subject: string,
    message: string
}

export default function ContactForm() {
    const { handleSubmit, register, formState: { errors } } = useForm<IFormInputs>();

    const submitData: SubmitHandler<IFormInputs> = (data) => {
        console.log(data)
    }

    return (
        <>
            <form className='flex flex-col justify-center items-center gap-2 w-full' onSubmit={handleSubmit(submitData)}>
                <div className='flex gap-2 w-full'>
                    <div className='w-full'>
                        <input
                            className='input w-full input-bordered'
                            placeholder='Name'
                            type="text"
                            {...register('name', {
                                required: 'Name is required',

                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name='name'
                            render={({ message }) => <p className='ml-2 text-error'>{message}</p>}

                        />
                    </div>
                    <div className='w-full'>
                        <input className='input w-full input-bordered' type="text" placeholder='Email' {...register('email', { required: 'Email is required' })} />
                        <ErrorMessage
                            errors={errors}
                            name='email'
                            render={({ message }) => <p className='ml-2 text-error'>{message}</p>}

                        />
                    </div>

                </div>
                <div className='w-full'>
                    <input className='input w-full input-bordered' type="text" placeholder='Subject' {...register('subject', { required: 'Subject is required' })} />
                    <ErrorMessage
                        errors={errors}
                        name='subject'
                        render={({ message }) => <p className='ml-2 text-error'>{message}</p>}

                    />
                </div>
                <div className='w-full'>
                    <textarea className='textarea w-full textarea-bordered' placeholder='Message' {...register('message', { required: 'Message is required' })} />
                    <ErrorMessage
                        errors={errors}
                        name='message'
                        render={({ message }) => <p className='ml-2 text-error'>{message}</p>}

                    />
                </div>
                <button type='submit' className='btn w-full btn-secondary'> Submit</button>
            </form>
        </>

    )
}