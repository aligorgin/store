import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
	title: string;
	price: string;
	img: string;
	href: string;
	alt: string;
	colors: boolean;
	className?: string;
}

export default function BigCard({ title, price, img, href, alt, colors, className }: Props) {
	return (
		<Link href={href}>
			<div className="h-64 w-64">
				<Image
					alt={alt}
					src={img}
					width={0}
					height={0}
					sizes="100vw"
					className={clsx('h-full w-full rounded-lg', className)}
				/>
				<p className="pt-4 text-sm font-[200] opacity-80">{title}</p>
				<div className="flex items-center justify-between pt-1">
					<span className="text-lg ">{price}</span>
					<span className={clsx(colors && 'h-3 w-3 rounded-full bg-red-700')} />
				</div>
			</div>
		</Link>
	);
}
