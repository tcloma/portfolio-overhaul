import { IProjData } from 'public/data/projectData';

type Props = {
	data: IProjData;
};

export default function ProjectCard({ data }: Props) {
	return (
		<div className='card-compact card w-96 bg-base-100 shadow-xl'>
			<figure>
				<img
					src={data.previewLink}
					alt='Project preview'
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className='card-actions justify-end'>
					<button className='btn-primary btn'>Buy Now</button>
				</div>
			</div>
		</div>
	);
}
