import { FastingJournal } from '@/app/ui/fasting-journal'
import { lusitana } from '@/app/ui/fonts'
import { Suspense } from 'react'
import { FastingJournalSkeleton } from '@/app/ui/fasting-journal'

export default function JournalPage() {
	return (
		<div>
			<h2
				className={`${lusitana.className} mb-4 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800`}
			>
				Journal
			</h2>
			<Suspense fallback={<FastingJournalSkeleton />}>
				<FastingJournal />
			</Suspense>
		</div>
	)
}
