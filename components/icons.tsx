import type { SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement>

export function Menu(props: IconProps) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg viewBox='0 0 24 24' {...props} fill='currentColor'>
			<g>
				<path d='M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z' />
			</g>
		</svg>
	)
}

export function Home(props: IconProps) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg viewBox='0 0 24 24' {...props} stroke='currentColor' fill='none'>
			<g>
				<path d='M4,10V21h6V15h4v6h6V10L12,3Z' />
			</g>
		</svg>
	)
}

export function Compass(props: IconProps) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg viewBox='0 0 24 24' {...props} fill='currentColor'>
			<g>
				<path d='M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z' />
			</g>
		</svg>
	)
}

export function LibraryMusic(props: IconProps) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg viewBox='0 0 24 24' {...props} stroke='currentColor' fill='none'>
			<g>
				<path d='M18,21H3V6h1v14h14V21z M21,3v15H6V3H21z M16,6h-3v5.28C12.7,11.11,12.37,11,12,11c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2V8 h2V6z' />
			</g>
		</svg>
	)
}

export function YTMusic(props: IconProps) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg viewBox='0 0 24 24' {...props} fill='currentColor'>
			<g>
				<path d='M10 9.35L15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z' />
			</g>
		</svg>
	)
}
