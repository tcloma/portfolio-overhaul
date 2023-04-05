'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import emailjs from '@emailjs/browser';

interface IFormInputs {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export default function ContactForm() {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<IFormInputs>();

	const submitData: SubmitHandler<IFormInputs> = (data) => {
		console.log(data);
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'YOUR_SERVICE_ID',
				'YOUR_TEMPLATE_ID',
				form.current,
				'YOUR_PUBLIC_KEY'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<>
			<form
				className='flex w-full flex-col items-center justify-center gap-2'
				onSubmit={handleSubmit(submitData)}
			>
				<div className='flex w-full gap-2'>
					<div className='w-full'>
						<input
							className='input-bordered input w-full'
							placeholder='Name'
							type='text'
							{...register('name', {
								required: 'Name is required',
							})}
						/>
						<ErrorMessage
							errors={errors}
							name='name'
							render={({ message }) => (
								<p className='ml-2 text-error'>{message}</p>
							)}
						/>
					</div>
					<div className='w-full'>
						<input
							className='input-bordered input w-full'
							type='text'
							placeholder='Email'
							{...register('email', { required: 'Email is required' })}
						/>
						<ErrorMessage
							errors={errors}
							name='email'
							render={({ message }) => (
								<p className='ml-2 text-error'>{message}</p>
							)}
						/>
					</div>
				</div>
				<div className='w-full'>
					<input
						className='input-bordered input w-full'
						type='text'
						placeholder='Subject'
						{...register('subject', { required: 'Subject is required' })}
					/>
					<ErrorMessage
						errors={errors}
						name='subject'
						render={({ message }) => (
							<p className='ml-2 text-error'>{message}</p>
						)}
					/>
				</div>
				<div className='w-full'>
					<textarea
						className='textarea-bordered textarea w-full'
						placeholder='Message'
						{...register('message', { required: 'Message is required' })}
					/>
					<ErrorMessage
						errors={errors}
						name='message'
						render={({ message }) => (
							<p className='ml-2 text-error'>{message}</p>
						)}
					/>
				</div>
				<button type='submit' className='btn-secondary btn w-full'>
					{' '}
					Submit
				</button>
			</form>
		</>
	);
}
