import Container from '../Container';
import { projectData } from 'public/data/projectData';
import SectionHeader from '../SectionHeader';
import ProjectCard from './ProjectCard';

export const metadata = {
	title: 'Projects',
};

export default function page({}) {
	return (
		<Container>
			<SectionHeader name='Projects' />
			<div className='grid grid-cols-2 w-full gap-2'>
				{projectData.map((project, index) => {
					return <ProjectCard key={index} data={project} />;
				})}
			</div>
		</Container>
	);
}
