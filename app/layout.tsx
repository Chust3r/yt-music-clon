import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { cn } from '~lib/utils'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

interface Props {
	children: React.ReactNode
}

function Layout({ children }: Props) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'antialiased',
					geistSans.variable,
					geistMono.variable
				)}
			>
				{children}
			</body>
		</html>
	)
}

export default Layout

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}
