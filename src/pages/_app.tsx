import localFont from '@next/font/local';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

const myFont = localFont({
	src: [
		{
			path: './fonts/iranyekan-thin.ttf',
			weight: '100'
		},
		{
			path: './fonts/iranyekan-light.ttf',
			weight: '200'
		},
		{
			path: './fonts/iranyekan.ttf',
			weight: '300'
		},
		{
			path: './fonts/iranyekan-medium.ttf',
			weight: '400'
		},
		{
			path: './fonts/iranyekan-bold.ttf',
			weight: '500'
		},
		{
			path: './fonts/iranyekan-black.ttf',
			weight: '600'
		},
		{
			path: './fonts/iranyekan-extrabold.ttf',
			weight: '700'
		},
		{
			path: './fonts/iranyekan-extrablack.ttf',
			weight: '800'
		}
	],
	variable: '--my-font'
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${myFont.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	);
}
