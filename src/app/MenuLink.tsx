import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
	route: string;
};

export default function MenuLink({ route }: Props) {
	const isHome = route === 'home';
	const path = usePathname();

	function onPath() {
		if (isHome && path == '/') return 'bg-primary text-white';
		if (path == '/' + route) {
			return 'bg-primary text-white';
		} else {
			return '';
		}
	}

	return (
		<li className={'btn-ghost btn normal-case ' + onPath()}>
			<Link className='capitalize' href={isHome ? '/' : `/${route}`}>
				{route}
			</Link>
		</li>
	);
}
