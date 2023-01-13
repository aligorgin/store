import clsx from 'clsx';
import { motion ,AnimatePresence} from 'framer-motion';
import { useState } from 'react';

import Container from '../components/Container';

function ChevronUp({ iconClass }: { iconClass?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			className={clsx('h-6 w-6 transition ease-in-out', iconClass)}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
		</svg>
	);
}

export default function Questions() {
	const [open, setOpen] = useState<boolean>(false);
	console.log(open);

	return (
		<Container title="سوالاتتون ؟">
			<div className="mx-20 mt-10">
				<div onClick={() => setOpen(!open)} className={clsx('cursor-pointer')}>
					<div
						className={clsx(
							open ? 'rounded-tl rounded-tr' : 'rounded',
							'flex items-center justify-between bg-neutral-700 p-4 font-[400]'
						)}
					>
						<ChevronUp iconClass={clsx(open ? 'rotate-0' : 'rotate-180')} />
						<p>یک سوال در رابطه با رسیدن بسته های شکستنی</p>
					</div>
					<AnimatePresence>
					{open && (
						<motion.div
							initial={{ y: -20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -10, opacity: 0 }}
							transition={{ ease: 'easeInOut', duration: 0.15 }}
						>
							<div
								className={clsx(
									open ? 'rounded-bl rounded-br' : 'rounded',
									'bg-neutral-700 p-4 pt-2 font-[200]'
								)}
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quasi, nostrum
								dolorum ea sit asperiores expedita! Dicta, velit excepturi magnam consectetur
								provident vitae, autem molestiae similique, deleniti aspernatur quod aliquid?
							</div>
						</motion.div>
					)}
					</AnimatePresence>
				</div>
				<div>hey</div>
			</div>
		</Container>
	);
}
