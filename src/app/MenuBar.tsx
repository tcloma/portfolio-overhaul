import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function MenuBar() {
	return (
		<div className='navbar absolute left-[50%] bottom-6 w-[40%] translate-x-[-50%] justify-between rounded-2xl border-2 bg-base-100 py-2 px-4'>
			<a className='rounded-2xl px-4 text-xl font-bold normal-case'>tcloma</a>
			<div className='divider divider-horizontal' />
			<ul className='menu menu-horizontal'>
				<li className='rounded-tl-2xl rounded-bl-2xl bg-primary text-white'>
					<a>Home</a>
				</li>
				<li className='rounded-2xl'>
					<a>Projects</a>
				</li>
				<li className='rounded-2xl'>
					<a>Contact</a>
				</li>
				<li className='rounded-2xl'>
					<a>Resume</a>
				</li>
			</ul>
			<div className='divider divider-horizontal' />
			<div>
				<button className='btn btn-ghost rounded-2xl text-3xl'>
					<FaGithub />
				</button>
				<button className='btn btn-ghost rounded-2xl text-3xl'>
					<FaLinkedin />
				</button>
			</div>
		</div>
	);
}
