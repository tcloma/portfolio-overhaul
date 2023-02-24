import Container from '../Container';
import SectionHeader from '../SectionHeader';
import ContactForm from './ContactForm';
import NYCDateTime from './NYCDateTime';

export default function page() {


	return (
		<Container>
			<SectionHeader name='Contact' />
			<NYCDateTime />
			<ContactForm />
		</Container>
	);
}
