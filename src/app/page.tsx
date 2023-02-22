import Image from 'next/image';
import SectionHeader from './SectionHeader';

export default function Home() {
	return (
		<main className='flex h-full flex-col gap-6 pt-20'>
			<header className='flex items-center space-x-4'>
				<div className='avatar'>
					<div className='mask mask-squircle w-24'>
						<img src='/images/avatar.jpg' />
					</div>
				</div>
				<div className='text-lg dark:text-white'>
					<div className='bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-3xl font-bold tracking-wide text-transparent'>
						Tyrone Cloma
					</div>
					<div className='text-sm text-gray-500 dark:text-gray-400'>
						Full Stack Dev @ NYC
					</div>
				</div>
			</header>
			<SectionHeader name='About' />
			<section id='about'>
				<p className='mb-4'>
					Hey! I'm Ty. Avid gamer, music fanatic, TypeScript devotee, Rustacean
					in the making, ever curious mind and lifelong learner.
				</p>
				<p className='mb-4'>
					I'm currently working freelance while searching for a full-time
					position. My work involves communicating directly with clients and
					translating design ideas into functional and reusable code.
				</p>
				<p>
					I value accessibility and developer experience, discovering and
					mastering tools that aid in those are what excites me as a developer.
				</p>
			</section>
			<Image
				className='h-auto w-full rounded-lg'
				src='/images/placeholder.jpg'
				alt='image description'
				width={1920}
				height={1080}
			/>
			<section id='socials' className='flex justify-between'>
				<div className='rounded-md border-2 px-14 py-4'>
					<p className='text-xl font-semibold'>LinkedIn</p>
				</div>
				<div className='rounded-md border-2 px-14 py-4'>
					<p className='text-xl font-semibold'>Github</p>
				</div>
				<div className='rounded-md border-2 px-14 py-4'>
					<p className='text-xl font-semibold'>Resume</p>
				</div>
			</section>
		</main>
	);
}
