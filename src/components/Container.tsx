import clsx from 'clsx';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Words from '../pages/Words';

function NavItem({ href, text }: { href: string; text: string }) {
	const router = useRouter();
	const isActive = router.asPath === href;

	return (
		<Link
			href={href}
			className={clsx(
				isActive
					? 'font-bold text-neutral-800 dark:text-neutral-200'
					: 'font-light text-neutral-600 dark:text-neutral-400',
					'cursor-pointer hover:dark:text-neutral-200'
			)}
		>
			<span>{text}</span>
		</Link>
	);
}

export default function Container({
	title = 'بدو',
	children
}: {
	title?: string;
	children: React.ReactNode;
}) {

	return (
		<div className="mx-auto max-w-4xl">
			<Head>
				<title>{title}</title>
				<meta content={'خرید کفش اورجینال رانینگ'} name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<nav className="flex w-full items-center justify-between pt-6">
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
					<div className="flex space-x-6">
						<NavItem href='/us' text={Words.nav3}/>
						<NavItem href='/questions' text={Words.nav2}/>
						<NavItem href='/products' text={Words.nav1}/>
					</div> 
				</div>
			</nav>
			{children}
		</div>
	);
}
