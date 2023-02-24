'use client';

import MenuLink from './MenuLink';
import MenuSocials from './MenuSocials';

export default function MenuBar() {
	return (
		<div className='navbar absolute left-[50%] top-6 w-[40%] translate-x-[-50%] justify-between rounded-2xl border-2 border-neutral-500 bg-base-100 py-2 px-4'>
			<a className='rounded-2xl px-4 text-xl font-bold normal-case'>tcloma</a>
			<div className='divider divider-horizontal' />
			<ul className='flex'>
				<MenuLink route='home' />
				<MenuLink route='projects' />
				<MenuLink route='blog' />
				<MenuLink route='contact' />
			</ul>
			<div className='divider divider-horizontal' />
			<MenuSocials />
		</div>
	);
}
