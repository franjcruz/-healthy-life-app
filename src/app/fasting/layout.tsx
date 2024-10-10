export default function FastingLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='p-8'>
			<h2 className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800'>
				Fasting
			</h2>
			{children}
		</div>
	)
}
