import { XMarkIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { DiscordLogo } from 'phosphor-react';
import { useContext } from 'react';

import { ModelContext } from '../../providers/ModalContext';

export default function Modal() {
	const { isClicked, setIsClicked } = useContext(ModelContext);

	return (
		<div
			className={clsx(
				'fixed top-0 left-0 h-screen w-full backdrop-blur-xl transition-all',
				isClicked ? 'visible opacity-100' : 'invisible opacity-0'
			)}
		>
			<div
				onClick={() => {
					setIsClicked(false);
				}}
				className="absolute left-0 top-0 z-[99] grid h-screen w-full place-items-center bg-zinc-900/25"
			>
				<div
					className={clsx(
						isClicked ? 'scale-100 opacity-100' : 'scale-75 opacity-0',
						'fixed z-[999] w-11/12 rounded-lg bg-black transition-all sm:w-[375px]'
					)}
				>
					<div className="p-4">
						{/* texts */}
						<div className="flex flex-row-reverse justify-between">
							<p className="flex cursor-default items-center justify-center text-lg opacity-80">
								لطفا وارد شوید
							</p>
							<div className="grid h-8 w-8 cursor-pointer place-items-center rounded-md transition-all hover:bg-zinc-600">
								<XMarkIcon onClick={() => setIsClicked(false)} className="h-6 w-6" />
							</div>
						</div>
						{/* sign in and sign up  */}
						<div className="mt-4 flex flex-col space-y-3">
							<a href="#">
								<div className="flex items-center space-x-4 rounded-lg bg-blue-800 px-4 py-2 text-xl font-[300] shadow-xl transition hover:scale-105 active:scale-100">
									<DiscordLogo size={32} weight={'fill'} />
									<span>ورود با دیسکورد</span>
								</div>
							</a>
							<a href="#">
								<div className="flex items-center space-x-4 rounded-lg border-2 border-blue-800 px-4 py-2 text-xl font-[300] shadow-xl transition hover:scale-105 active:scale-100">
									<DiscordLogo size={32} weight={'fill'} />
									<span>ثبت با دیسکورد</span>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
