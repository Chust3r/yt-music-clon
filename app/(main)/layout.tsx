import { Content, Footer, Header, NavBar } from '~components'

interface Props {
	children: React.ReactNode
}

function Layout({ children }: Props) {
	return (
		<div className='w-full h-dvh flex flex-col overflow-hidden'>
			<Header />
			<main className='w-full h-full flex flex-row flex-1'>
				<NavBar />
				<Content>{children}</Content>
			</main>
			<Footer />
		</div>
	)
}

export default Layout
