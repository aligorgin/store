import { Suspense } from 'react';

import Container from '../components/Container';

export default function Us() {
	return (
		<Suspense fallback={null}>
			<Container title={'ما'}>
				<div className="mt-8">hey this is ma page</div>
			</Container>
		</Suspense>
	);
}
