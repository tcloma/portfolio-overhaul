import Image from 'next/image';
import SectionHeader from './SectionHeader';
import { FaMoon } from 'react-icons/fa';
import Container from './Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Tyrone Cloma | Home',
};

export default function Home() {
	return (
		<Container>
			<header className='flex items-center space-x-4'>
				<div className='avatar'>
					<div className='mask mask-squircle w-24'>
						<img src='/images/placeholders/avatar.jpg' />
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
					Hey! I'm Ty. An avid gamer, music fanatic, TypeScript devotee,
					up-and-coming Rustacean, ever-curious mind, and lifelong learner.
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
				src='/images/placeholders/HDimage.jpg'
				alt='image description'
				width={1920}
				height={1080}
			/>
		</Container>
	);
}
