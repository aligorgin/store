import clsx from 'clsx';
import { motion } from 'framer-motion';

import { ChevronUp } from '../icons/chevron-up';

interface Props {
	question: string;
	answer: string;
	isActive: boolean;
	open: any;
}

export default function Disclosure({ question, answer, isActive, open }: Props) {
	return (
		<div onClick={open} className={clsx(isActive ? '' : 'cursor-pointer')}>
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
