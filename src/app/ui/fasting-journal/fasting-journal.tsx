import { fetchFastingByUser } from '@/app/lib/data'

export default async function FastingJournal() {
	const fastingRecords = await fetchFastingByUser(
		'410544b2-4001-4271-9855-fec4b6a6442a',
	)

	return (
		<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
			{fastingRecords.map((fastingRecord) => (
				<div
					key={fastingRecord.id}
					className='p-4 bg-gray-100 rounded-lg'
				>
					<p className='text-sm font-semibold'>
						Start: {fastingRecord.date_start.toLocaleString()}
					</p>
					<p className='text-sm text-gray-500'>
						End: {fastingRecord.date_end.toLocaleString()}
					</p>
				</div>
			))}
		</div>
	)
}
