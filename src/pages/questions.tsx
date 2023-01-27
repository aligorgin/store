import { useState } from 'react';

import Container from '../ui/components/Container';
import Disclosure from '../ui/components/Disclosure';

export default function Questions() {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	return (
		<Container title="سوالاتتون ؟">
			<div className="mt-6 flex flex-col space-y-5">
				<Disclosure
					isActive={activeIndex === 0}
					open={() => setActiveIndex(0)}
					question="یک سوال در رابطه با ارسال کفش 5"
					answer="2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quasi, nostrumdolorum ea sit asperiores expedita! Dicta, velit excepturi magnam consectetur
					provident vitae, autem molestiae similique, deleniti aspernatur quod aliquid?"
				/>
				<Disclosure
					isActive={activeIndex === 1}
					open={() => setActiveIndex(1)}
					question="یک سوال در رابطه با ارسال کفش 4"
					answer="234Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quasi, nostrumdolorum ea sit asperiores expedita! Dicta, velit excepturi magnam consectetur
					provident vitae, autem molestiae similique, deleniti aspernatur quod aliquid?"
				/>
				<Disclosure
					isActive={activeIndex === 2}
					open={() => setActiveIndex(2)}
					question="یک سوال در رابطه با ارسال کفش 3"
					answer="3245Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quasi, nostrumdolorum ea sit asperiores expedita! Dicta, velit excepturi magnam consectetur
					provident vitae, autem molestiae similique, deleniti aspernatur quod aliquid?"
				/>
				<Disclosure
					isActive={activeIndex === 3}
					open={() => setActiveIndex(3)}
					question="یک سوال در رابطه با ارسال کفش 2"
					answer="23wergfLorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quasi, nostrumdolorum ea sit asperiores expedita! Dicta, velit excepturi magnam consectetur
					provident vitae, autem molestiae similique, deleniti aspernatur quod aliquid?"
				/>
				<Disclosure
					isActive={activeIndex === 4}
					open={() => setActiveIndex(4)}
					question="یک سوال در رابطه با ارسال کفش 1"
					answer="2345 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quasi, nostrumdolorum ea sit asperiores expedita! Dicta, velit excepturi magnam consectetur
					provident vitae, autem molestiae similique, deleniti aspernatur quod aliquid?"
				/>
			</div>
		</Container>
	);
}
