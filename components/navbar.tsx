'use client'
import { usePathname } from 'next/navigation'
import { cn } from '~lib/utils'
import { type IconProps, Compass, Home, LibraryMusic, YTMusic } from '~icons'

interface Item {
	id: number
	label: string
	path: string
	icon: React.ElementType<IconProps>
}

const items: Item[] = [
	{
		id: 1,
		label: 'Principal',
		path: '/',
		icon: Home,
	},
	{
		id: 2,
		label: 'Explorar',
		path: '/explore',
		icon: Compass,
	},
	{
		id: 3,
		label: 'Biblioteca',
		path: '/library',
		icon: LibraryMusic,
	},
	{
		id: 4,
		label: 'Actualizar',
		path: '/music_premium',
		icon: YTMusic,
	},
]

export function NavBar() {
	const pathname = usePathname()

	return (
		<aside className='w-[290px] h-full border-r border-neutral-800 px-2 py-1'>
			<section className='flex flex-col'>
				<div>
					{items.map((item) => {
						const isActive = pathname === item.path

						return (
							<button
								key={item.id}
								type='button'
								className={cn(
									'flex gap-4 items-center px-3 py-2 rounded-lg w-full',
									isActive
										? 'bg-neutral-900/50'
										: 'hover:bg-neutral-800/50'
								)}
							>
								<item.icon
									className={cn(
										'size-6 aspect-square',
										isActive && 'fill-white stroke-none'
									)}
								/>
								<span>{item.label}</span>
							</button>
						)
					})}
				</div>
				<div className='px-3 py-8'>
					<hr className='border-neutral-800' />
				</div>
			</section>

			<section>
				<p>PLAYLIST'S</p>
			</section>
		</aside>
	)
}
