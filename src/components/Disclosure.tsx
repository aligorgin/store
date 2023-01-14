import clsx from 'clsx';
import { motion } from 'framer-motion';

function ChevronUp({ iconClass }: { iconClass?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			className={clsx('h-6 w-6 transition ease-out', iconClass)}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
		</svg>
	);
}

interface Props {
	question: string;
	answer: string;
	isActive: boolean;
	open: any;
}

export default function Disclosure({ question, answer, isActive, open }: Props) {
	return (
		<div onClick={open} className={clsx(isActive ? '' :'cursor-pointer')}>
			<div
				className={clsx(
					isActive ? 'rounded-tl rounded-tr' : 'rounded',
					'flex items-center justify-between bg-neutral-800 p-4 font-[400]'
				)}
			>
				<ChevronUp iconClass={clsx(isActive ? 'rotate-0' : 'rotate-180')} />
				<p>{question}</p>
			</div>
				{isActive && (
					<motion.div
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 0, opacity: 0 }}
						transition={{ ease: 'easeOut', duration: 0.15 }}
					>
						<div
							className={clsx(
								isActive ? 'rounded-bl rounded-br' : 'rounded',
								'bg-neutral-800 p-4 pt-2 font-[200]'
							)}
						>
							{answer}
						</div>
					</motion.div>
				)}
		</div>
	);
}
