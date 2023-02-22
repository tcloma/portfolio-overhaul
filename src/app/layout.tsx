import './globals.css';
import { Inter } from '@next/font/google';
import MenuBar from './MenuBar';

type Props = {
	children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
	title: 'Tyrone Cloma',
	description: 'Full Stack Developer',
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en' data-theme='dracula'>
			<head />
			<body className={`${inter.className} px-[10%] antialiased lg:px-[35%]`}>
				{children}
				<MenuBar />
			</body>
		</html>
	);
}
