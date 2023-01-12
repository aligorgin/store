import { faker } from '@faker-js/faker';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import data from '../../data.json';
import Card from '../components/Card';
import Container from '../components/Container';
import Words from './Words';

export default function Home() {
	const img: string = faker.image.sports();

	return (
		<Suspense fallback={null}>
			<Container>
				<section className="mt-8 w-full">
					<Swiper
						pagination={{ clickable: true }}
						slidesPerView={'auto'}
						centeredSlides={true}
						spaceBetween={-100}
						modules={[Pagination, Autoplay, Navigation]}
						loop={true}
						navigation={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false
						}}
					>
						<SwiperSlide>
							<div className="h-52 w-[838px] pl-16 ">
								<Link href={'/'}>
									<Image
										src={img}
										alt="random img"
										width={0}
										height={0}
										sizes="100vw"
										priority
										className="h-full w-full rounded"
									/>
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="h-52 w-[838px] pl-16">
								<Link href={'/'}>
									<Image
										src={img}
										alt="random img"
										width={0}
										height={0}
										sizes="100vw"
										priority
										className="h-full w-full rounded"
									/>
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="h-52 w-[838px] pl-16">
								<Link href={'https://www.google.com/'}>
									<Image
										src={img}
										alt="random img"
										width={0}
										height={0}
										sizes="100vw"
										priority
										className="h-full w-full rounded"
									/>
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="h-52 w-[838px] pl-16">
								<Link href={'/'}>
									<Image
										src={img}
										alt="random img"
										width={0}
										height={0}
										sizes="100vw"
										priority
										className="h-full w-full rounded"
									/>
								</Link>
							</div>
						</SwiperSlide>
					</Swiper>
				</section>

				<section className="mt-10">
					<div className="text-right text-2xl font-medium">{Words.heading2}</div>
					<div className=" mt-4">
						<ScrollContainer horizontal={true} className="flex w-full space-x-2">
							<div className="flex space-x-6">
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[0]?.title}`}
									price={`${data.product[0]?.price}`}
								/>
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[2]?.title}`}
									price={`${data.product[2]?.price}`}
								/>
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[3]?.title}`}
									price={`${data.product[3]?.price}`}
								/>
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[4]?.title}`}
									price={`${data.product[4]?.price}`}
								/>
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[5]?.title}`}
									price={`${data.product[5]?.price}`}
								/>
							</div>
						</ScrollContainer>
					</div>
				</section>

				<section className="mt-10">
					<div className="text-right text-2xl font-medium">{Words.heading2}</div>
					<div className=" mt-4">
						<ScrollContainer horizontal={true} className="flex w-full space-x-2">
							<div className="flex space-x-6">
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[5]?.title}`}
									price={`${data.product[5]?.price}`}
								/>
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[4]?.title}`}
									price={`${data.product[4]?.price}`}
								/>
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[2]?.title}`}
									price={`${data.product[2]?.price}`}
								/>
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[0]?.title}`}
									price={`${data.product[0]?.price}`}
								/>
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[1]?.title}`}
									price={`${data.product[1]?.price}`}
								/>
							</div>
						</ScrollContainer>
					</div>
				</section>
			</Container>
		</Suspense>
	);
}

{
	/* <nav className="flex w-full items-center justify-between pt-6">
					<div>
						<div className="cursor-pointer rounded bg-orange-700 px-3 pb-2 pt-1 font-[300] transition hover:bg-orange-600 active:scale-90">
							{Words.signIn}
						</div>
					</div>
					<div className="flex flex-row-reverse items-center">
						<Link href={'/'} className="cursor-pointer pl-12">
							<div className="animate-hue-animation rounded-full bg-orange-900 px-2 pb-2 pt-1 font-[700]">
								بدو
							</div>
						</Link>
						<div className="flex space-x-6 font-[200]">
							<Link href={'/ma'}>
								<div className="cursor-pointer opacity-70 transition hover:opacity-100">
									{Words.nav3}
								</div>
							</Link>
							<Link href={'/'}>
								<div className="cursor-pointer opacity-70 transition hover:opacity-100">
									{Words.nav2}
								</div>
							</Link>
							<Link href={'/'}>
								<div className="cursor-pointer opacity-70 transition hover:opacity-100">
									{Words.nav1}
								</div>
							</Link>
						</div>
					</div>
				</nav> */
}

{
	/* <section className="mt-8 w-full">
					<Swiper
						pagination={{ clickable: true }}
						slidesPerView={'auto'}
						centeredSlides={true}
						spaceBetween={-100}
						modules={[Pagination, Autoplay, Navigation]}
						loop={true}
						navigation={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false
						}}
					>
						<SwiperSlide>
							<div className="h-52 w-[838px] pl-16 ">
								<Link href={'/'}>
									<Image
										src={img}
										alt="random img"
										width={0}
										height={0}
										sizes="100vw"
										priority
										className="h-full w-full rounded"
									/>
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="h-52 w-[838px] pl-16">
								<Link href={'/'}>
									<Image
										src={img}
										alt="random img"
										width={0}
										height={0}
										sizes="100vw"
										priority
										className="h-full w-full rounded"
									/>
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="h-52 w-[838px] pl-16">
								<Link href={'https://www.google.com/'}>
									<Image
										src={img}
										alt="random img"
										width={0}
										height={0}
										sizes="100vw"
										priority
										className="h-full w-full rounded"
									/>
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="h-52 w-[838px] pl-16">
								<Link href={'/'}>
									<Image
										src={img}
										alt="random img"
										width={0}
										height={0}
										sizes="100vw"
										priority
										className="h-full w-full rounded"
									/>
								</Link>
							</div>
						</SwiperSlide>
					</Swiper>
				</section>

				<section className="mt-10">
					<div className="text-right text-2xl font-medium">{Words.heading2}</div>
					<div className=" mt-4">
						<ScrollContainer horizontal={true} className="flex w-full space-x-2">
							<div className="flex space-x-6">
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[0]?.title}`}
									price={`${data.product[0]?.price}`}
								/>
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[2]?.title}`}
									price={`${data.product[2]?.price}`}
								/>
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[3]?.title}`}
									price={`${data.product[3]?.price}`}
								/>
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[4]?.title}`}
									price={`${data.product[4]?.price}`}
								/>
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[5]?.title}`}
									price={`${data.product[5]?.price}`}
								/>
							</div>
						</ScrollContainer>
					</div>
				</section>

				<section className="mt-10">
					<div className="text-right text-2xl font-medium">{Words.heading2}</div>
					<div className=" mt-4">
						<ScrollContainer horizontal={true} className="flex w-full space-x-2">
							<div className="flex space-x-6">
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[5]?.title}`}
									price={`${data.product[5]?.price}`}
								/>
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[4]?.title}`}
									price={`${data.product[4]?.price}`}
								/>
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[2]?.title}`}
									price={`${data.product[2]?.price}`}
								/>
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[0]?.title}`}
									price={`${data.product[0]?.price}`}
								/>
								<Card
									href={`/`}
									img={`${data.product[0]?.image}`}
									alt="randome img"
									title={`${data.product[1]?.title}`}
									price={`${data.product[1]?.price}`}
								/>
							</div>
						</ScrollContainer>
					</div>
				</section> */
}
