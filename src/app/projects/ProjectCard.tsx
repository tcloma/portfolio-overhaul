import { IProjData } from 'public/data/projectData';
import CardBtns from './CardBtns';

type Props = {
	data: IProjData;
};

export default function ProjectCard({ data }: Props) {

	return (
		<div className='flex flex-col justify-center items-center border-2 rounded-xl border-neutral'>
			<figure>
				<img src={data.previewLink} className='rounded-xl' alt='project preview' />
			</figure>
			<div className='w-full p-4 text-center'>
				<h2 className='font-bold text-2xl mb-2'>{data.title}</h2>
				<div className='flex justify-center gap-2 flex-wrap mb-2'>
					{data.stack.map(tech => {
						return <p className='badge badge-secondary'>{tech}</p>
					})}
				</div>
				<CardBtns github={data.githubLink} demo={data.demoLink}/>
			</div>
		</div>
	);
}
