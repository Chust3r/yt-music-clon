interface Item {
	id: number
	label: string
	path: string
}

const items: Item[] = [
	{
		id: 1,
		label: 'Main',
		path: '/',
	},
	{
		id: 2,
		label: 'Explore',
		path: '/explore',
	},
	{
		id: 3,
		label: 'library',
		path: '/library',
	},
	{
		id: 4,
		label: 'Music Premium',
		path: '/music_premium',
	},
]

export function NavBar() {
	return (
		<aside className='w-[240px] h-full border'>
			<section>
				<p>FIRST CONTENT</p>
			</section>
			<hr />
			<section>
				<p>PLAYLIST'S</p>
			</section>
		</aside>
	)
}
