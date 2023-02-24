import Container from '../Container';
import SectionHeader from '../SectionHeader';
import ContactForm from './ContactForm';

export default function page() {


	return (
		<Container>
			<SectionHeader name='Contact' />
			<ContactForm />
		</Container>
	);
}
