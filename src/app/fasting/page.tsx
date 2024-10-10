'use client'

import { useState } from 'react'

export default function FastingPage() {
	const [fasting, setFasting] = useState(false)
	const startFastingText = 'Start fasting'
	const endFastingText = 'End fasting'

	const handleClick = () => {
		if (fasting) {
			setFasting(false)
			console.log('Fasting ended!')
			return
		}
		setFasting(true)
		console.log('Fasting button clicked!')
	}

	return (
		<main className='flex justify-center items-center pt-8'>
			<button
				className='w-32 h-32 rounded-full bg-green-600 font-semibold text-white text-lg active:scale-90 transition-transform duration-150'
				onClick={handleClick}
			>
				{fasting ? endFastingText : startFastingText}
			</button>
		</main>
	)
}
