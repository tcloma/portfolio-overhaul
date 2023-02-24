import './globals.css';
import { Inter } from '@next/font/google';
import MenuBar from './MenuBar';
import type { Metadata } from 'next';

type Props = {
	children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
	title: {
		default: 'Tyrone Cloma',
		template: 'Tyrone Cloma | %s',
	},
	description: 'Full Stack Developer',
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en' data-theme='dracula'>
			<head />
			<body className={`${inter.className} px-[10%] antialiased lg:px-[30%]`}>
				<MenuBar />
				{children}
			</body>
		</html>
	);
}
