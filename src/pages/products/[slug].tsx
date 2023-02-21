import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import useSWR from 'swr';

import { ModelContext } from '../../providers/ModalContext';
import Container from '../../ui/components/Container';
import Modal from '../../ui/components/modal';

const fetcher = (url: any) => fetch(url).then((res) => res.json());
const API = '/api/products';

export default function Products() {
	const { isClicked, setIsClicked } = useContext(ModelContext);
	console.log(isClicked);
	const router = useRouter();
	const { slug } = router.query;

	const { data, error } = useSWR(API, fetcher);

	if (error) return <div>error {error}</div>;

	let currentData;
	for (let i = 0; data?.length > i; i++) {
		if (data[i]?.title === slug) {
			currentData = data[i];
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
							onClick={() => setIsClicked(true)}
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
								priority
							/>
						)}
					</div>
				</div>
			</div>
			{/* todo : when u click on the container, isClicked sets to false !!! */}
			<Modal />
		</Container>
	);
}
