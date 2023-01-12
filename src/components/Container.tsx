import clsx from 'clsx';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NavItem({ href, text }: { href: string; text: string }) {
	const router = useRouter();
	const isActive = router.asPath === href;

	return (
		<Link
			href={href}
			className={clsx(
				isActive
					? 'font-semibold text-neutral-800 dark:text-neutral-200'
					: 'font-normal text-neutral-600 dark:text-neutral-400'
			)}
		>
			<span>{text}</span>
		</Link>
	);
}

export default function Container() {
	const meta = {
		title: 'بدو ',
		description: 'خرید کفش اورجینال رانینگ'
	};
	return (
		<div>
			<Head>
				<title>{meta.title}</title>
				<meta content={meta.description} name="description" />
			</Head>
		</div>
	);
}
