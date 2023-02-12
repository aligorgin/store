import Image from 'next/image';
import { useRouter } from 'next/router';

import data from '../../../data.json';
import Container from '../../ui/components/Container';

export default function Products() {
	const router = useRouter();
	const { slug } = router.query;
	console.log(slug);
	let currentData;
	for (let i = 0; data.product.length > i; i++) {
		if (data.product[i]?.title === slug) {
			currentData = data.product[i];
		}
	}
	return (
		<Container title={slug}>
			<div className="mt-10 sm:mt-32">
				<div className="flex w-full flex-col-reverse items-center px-28 sm:flex-row sm:justify-between">
					<div className="flex flex-col space-y-10">
						<div className="text-4xl">{currentData?.title}</div>
						<div className="text-2xl ">
							قیمت : {currentData?.price} <span className="text-base">تومان</span>
						</div>
						<div className="flex h-12 w-12 items-center justify-center rounded-full border pt-1 text-lg">
							{currentData?.size}
						</div>
						<button
							type="button"
							className="roude rounded bg-orange-600 px-6 py-2 transition hover:scale-105 active:scale-95"
						>
							اضافه کردن به سبد خرید
						</button>
					</div>
					<div className="mb-12 h-80 w-80 sm:mb-0">
						{currentData && (
							<Image
								src={`${currentData?.image}`}
								width={0}
								height={0}
								alt={`${currentData?.title}`}
								sizes="100vw"
								className={'h-full w-full rounded'}
							/>
						)}
					</div>
				</div>
			</div>
		</Container>
	);
}
