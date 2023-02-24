import { IProjData } from 'public/data/projectData';

type Props = {
	data: IProjData;
};

export default function ProjectCard({ data }: Props) {
	return (
		<div className='card bg-base-100 shadow-xl lg:card-side'>
			<figure>
				<img src={data.previewLink} className='lg:aspect-square' alt='Album' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>New album is released!</h2>
				<p>Click the button to listen on Spotiwhy app.</p>
				<div className='card-actions justify-end'>
					<button className='btn-primary btn'>Listen</button>
				</div>
			</div>
		</div>
	);
}
