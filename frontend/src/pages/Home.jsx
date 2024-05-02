import React from 'react';
import Question from '../components/Question';
import Answers from '../components/Answers';

export default function Home() {
	return (
		<div className='w-full'>
			<div className='flex justify-center items-center content-center'>
				<div className='max-w-5xl mx-auto'>
					<Question />
					<Answers />
				</div>
			</div>
		</div>
	);
}
