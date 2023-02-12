import { faker } from '@faker-js/faker';
import Image from 'next/image';
import Link from 'next/link';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import data from '../../data.json';
import Card from '../ui/components/Card';
import Container from '../ui/components/Container';
import Words from './Words';

export default function Home() {
	const img: string = faker.image.sports();

	return (
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
				<div className="text-right text-2xl font-medium">{Words.heading}</div>
				<div className=" mt-4">
					<ScrollContainer horizontal={true} className="flex w-full space-x-2">
						<div className="flex space-x-6">
							{data &&
								data.product.map((data) => {
									return (
										<Card
											key={data.id}
											href={`/products/${data.title}`}
											img={`${data.image}`}
											alt={`randome img`}
											title={`${data.title}`}
											price={`${data.price}`}
										/>
									);
								})}
						</div>
					</ScrollContainer>
				</div>
			</section>

			<section className="mt-10">
				<div className="text-right text-2xl font-medium">{Words.heading2}</div>
				<div className=" mt-4">
					<ScrollContainer horizontal={true} className="flex w-full space-x-2">
						<div className="flex space-x-6">
							{data &&
								data.product.map((data) => {
									return (
										<Card
											key={data.id}
											href={`/products/${data.title}`}
											img={`${data.image}`}
											alt={`randome img`}
											title={`${data.title}`}
											price={`${data.price}`}
										/>
									);
								})}
						</div>
					</ScrollContainer>
				</div>
			</section>
		</Container>
	);
}
