type Props = {
	children: React.ReactNode;
};

export default function Container({ children }: Props) {
	return (
		<main className='mt-24 flex flex-col gap-6 rounded-2xl rounded-tr-lg rounded-tl-lg border-neutral-500 p-6'>
			{children}
		</main>
	);
}
