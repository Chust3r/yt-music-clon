interface Props {
	children: React.ReactNode
}

export function Content({ children }: Props) {
	return (
		<section className='grid place-content-center w-full'>{children}</section>
	)
}
