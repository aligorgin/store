import { DiscordLogo } from 'phosphor-react';
import { Suspense } from 'react';

import Container from '../ui/components/Container';

export default function SignIn() {
	return (
		<Suspense fallback={null}>
			<Container title="sign in | bodo">
				<div className="flex h-[38rem] items-center justify-center">
					<a href="#">
						<div className="flex items-center space-x-4 rounded-lg bg-blue-800 px-4 py-2 text-xl font-[300] shadow-xl transition hover:scale-105 active:scale-100">
							<DiscordLogo size={32} weight={'fill'} />
							<span>ورود با دیسکورد</span>
						</div>
					</a>
				</div>
			</Container>
		</Suspense>
	);
}
