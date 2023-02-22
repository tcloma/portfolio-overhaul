'use client';

import { motion } from 'framer-motion';

type Props = {
	name: string;
};

export default function SectionHeader({ name }: Props) {
	return (
		<motion.strong className='text-3xl underline decoration-accent'>
			{name}
		</motion.strong>
	);
}
