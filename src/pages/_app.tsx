import localFont from '@next/font/local';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

const myFont = localFont({
	src: [
		{
			path: './fonts/IRANYekan/iranyekan-thin.ttf',
			weight: '100'
		},
		{
			path: './fonts/IRANYekan/iranyekan-light.ttf',
			weight: '200'
		},
		{
			path: './fonts/IRANYekan/iranyekan.ttf',
			weight: '300'
		},
		{
			path: './fonts/IRANYekan/iranyekan-medium.ttf',
			weight: '400'
		},
		{
			path: './fonts/IRANYekan/iranyekan-bold.ttf',
			weight: '500'
		},
		{
			path: './fonts/IRANYekan/iranyekan-black.ttf',
			weight: '600'
		},
		{
			path: './fonts/IRANYekan/iranyekan-extrabold.ttf',
			weight: '700'
		},
		{
			path: './fonts/IRANYekan/iranyekan-extrablack.ttf',
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
