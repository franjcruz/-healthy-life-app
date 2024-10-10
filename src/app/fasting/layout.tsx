import { lusitana } from '../ui/fonts'

export default function FastingLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<h2
				className={`${lusitana.className} mb-4 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800`}
			>
				Fasting
			</h2>
			{children}
		</div>
	)
}
