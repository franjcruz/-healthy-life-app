export default function FastingJournalSkeleton() {
	return (
		<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
			{Array.from({ length: 4 }).map((_, index) => (
				<div
					key={index}
					className='p-4 bg-gray-100 rounded-lg animate-pulse'
				>
					<div className='h-4 bg-gray-300 rounded w-3/4 mb-2'></div>
					<div className='h-4 bg-gray-300 rounded w-1/2'></div>
				</div>
			))}
		</div>
	)
}
