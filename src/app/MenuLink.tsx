import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
	route: string;
};

export default function MenuLink({ route }: Props) {
	const isHome = route === 'home';
	const path = usePathname();

	function onPath() {
		if (isHome && path == '/') return 'bg-neutral';
		if (path == '/' + route) {
			return 'bg-neutral';
		} else {
			return '';
		}
	}

	return (
		<li className={'btn btn-ghost normal-case ' + onPath()}>
			<Link className='capitalize' href={isHome ? '/' : `/${route}`}>
				{route}
			</Link>
		</li>
	);
}
