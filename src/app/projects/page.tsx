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
			{projectData.map((project) => {
				return <ProjectCard data={project} />;
			})}
		</Container>
	);
}
