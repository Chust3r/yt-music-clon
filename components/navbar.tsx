'use client'
import { usePathname } from 'next/navigation'
import { cn } from '~lib/utils'
import {
	type IconProps,
	HomeInactive,
	HomeActive,
	ExploreActive,
	ExploreInactive,
	LibraryMusiActive,
	LibraryMusicInactive,
	YTMusic,
} from '~icons'
import Link from 'next/link'

interface Item {
	id: number
	label: string
	path: string
	icons: {
		active: React.ElementType<IconProps>
		inactive: React.ElementType<IconProps>
	}
}

const items: Item[] = [
	{
		id: 1,
		label: 'Principal',
		path: '/',
		icons: {
			active: HomeActive,
			inactive: HomeInactive,
		},
	},
	{
		id: 2,
		label: 'Explorar',
		path: '/explore',
		icons: {
			active: ExploreActive,
			inactive: ExploreInactive,
		},
	},
	{
		id: 3,
		label: 'Biblioteca',
		path: '/library',
		icons: {
			active: LibraryMusiActive,
			inactive: LibraryMusicInactive,
		},
	},
	{
		id: 4,
		label: 'Actualizar',
		path: '/music_premium',
		icons: {
			active: YTMusic,
			inactive: YTMusic,
		},
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
							<Link href={item.path} key={item.id}>
								<button
									type='button'
									className={cn(
										'flex gap-4 items-center px-3 py-3 rounded-lg w-full',
										isActive
											? 'bg-neutral-900/50'
											: 'hover:bg-neutral-800/50'
									)}
								>
									{isActive ? (
										<item.icons.active className='size-6' />
									) : (
										<item.icons.inactive className='size-6' />
									)}
									<span className={cn(isActive && 'font-medium')}>
										{item.label}
									</span>
								</button>
							</Link>
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
