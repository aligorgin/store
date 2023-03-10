import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
	title: string;
	price: string;
	img: string;
	href: string;
	alt: string;
	className?: string;
}

export default function Card({ title, price, img, href, alt, className }: Props) {
	return (
		<Link href={href}>
			<div className="h-48 w-48">
				<Image
					src={img}
					width={0}
					height={0}
					alt={alt}
					sizes="100vw"
					className={clsx('h-full w-full rounded-lg', className)}
				/>
			</div>
			<p className="pt-2 text-sm opacity-80">{title}</p>
			<p className="text-lg pt-1">{price}</p>
		</Link>
	);
}
