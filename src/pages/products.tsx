import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FunnelIcon } from '@heroicons/react/24/outline';
import { Suspense } from 'react';

import Container from '../ui/components/Container';

export default function Products() {
	return (
		<Suspense fallback={null}>
			<Container title="کفش ها">
				<div className="mt-5">
					<div className="flex justify-end space-x-8 border-t-[1px] border-neutral-600 pt-4">
						<div className="flex cursor-pointer space-x-2 rounded border-[0.5px] py-1 pr-3 pl-2 text-sm font-[200]">
							<ChevronDownIcon className="w-5" />
							<span>رنگ</span>
						</div>
						<div className="flex cursor-pointer space-x-2 rounded border-[0.5px] py-1 pr-3 pl-2 text-sm font-[200]">
							<ChevronDownIcon className="w-5" />
							<span>اندازه</span>
						</div>
						<div className="flex cursor-pointer space-x-2 rounded border-[0.5px] py-1 pr-3 pl-2 text-sm font-[200]">
							<FunnelIcon className="w-5" />
							<span>مرتب سازی</span>
						</div>
					</div>
				</div>
			</Container>
		</Suspense>
	);
}
