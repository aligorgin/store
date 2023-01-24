import Image from 'next/image';
import Link from 'next/link';

interface Props {
	title: string;
	price: string;
	img: string;
	href: string;
	alt: string;
}

export default function Card({ title, price, img, href, alt }: Props) {
	return (
		<Link href={href}>
			<div className="h-48 w-48">
				<Image
					src={img}
					width={0}
					height={0}
					alt={alt}
					sizes="100vw"
					className="h-full w-full rounded"
				/>
			</div>
			<p className="pt-2 text-sm opacity-80">{title}</p>
			<p className="text-lg">{price}</p>
		</Link>
	);
}
