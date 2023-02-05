import { useRouter } from 'next/router';

import data from '../../../data.json';
import Container from '../../ui/components/Container';

export default function Products() {
	const router = useRouter();
	const { slug } = router.query;
	let currentData;
	for (let i = 0; data.product.length > i; i++) {
		if (data.product[i]?.title === slug) {
			currentData = data.product[i];
		}
	}
	return (
		<Container title={slug}>
			<div className="mt-6 flex items-center justify-center">
				<div>hey {slug}</div>
			</div>
		</Container>
	);
}
