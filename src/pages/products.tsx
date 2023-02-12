import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FunnelIcon } from '@heroicons/react/24/outline';
import useSWR from 'swr';
import prisma from '../../lib/prisma';

import data from '../../data.json';
import BigCard from '../ui/components/BigCard';
import Container from '../ui/components/Container';

const fetcher = (url: any) => fetch(url).then((res) => res.json());
const API = 'http://localhost:3000/api/hello';

export async function getStaticProps() {
	const products = await prisma.product.findMany();
	return {
		props: { products }
	};
}

export default function Products({ products }: { products: any }) {
	// console.log(info?.name);
	const { data: post, error } = useSWR(API, fetcher);
	console.log(products);

	return (
		<Container title="کفش ها">
			<div className="mt-6">
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
						<ChevronDownIcon className="w-5" />
						<span>مدل</span>
					</div>
					<div className="flex cursor-pointer space-x-2 rounded border-[0.5px] py-1 pr-3 pl-2 text-sm font-[200]">
						<FunnelIcon className="w-5" />
						<span>جدید ترین ها</span>
					</div>
				</div>
				<div className="mt-8 grid grid-cols-1 justify-items-center gap-y-[90px] sm:grid-cols-2 md:grid-cols-3">
					{data &&
						data.product.map((data) => {
							return (
								<BigCard
									key={data.id}
									href={`/products/${data.title}`}
									img={`${data.image}`}
									alt={`randome img`}
									title={`${data.title}`}
									price={`${data.price}`}
									colors={true}
								/>
							);
						})}
				</div>
			</div>
		</Container>
	);
}
