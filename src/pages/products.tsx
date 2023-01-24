import { Suspense } from 'react';

import Container from '../ui/components/Container';

export default function Products() {
	return (
		<Suspense fallback={null}>
			<Container title="کفش ها">
				<div className="mt-5">
					<div className="flex justify-end space-x-8 border-t-[1px] border-neutral-600 pt-4">
						<div className="cursor-pointer rounded-lg border-[0.5px] px-3 py-1 text-sm font-[200]">
							اندازه
						</div>
						<div className="cursor-pointer rounded-lg border-[0.5px] px-3 py-1 text-sm font-[200]">
							رنگ
						</div>
						<div className="cursor-pointer rounded-lg border-[0.5px] px-3 py-1 text-sm font-[200]">
							مرتب سازی
						</div>
					</div>
				</div>
			</Container>
		</Suspense>
	);
}
