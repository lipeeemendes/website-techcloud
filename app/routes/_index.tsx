import { Container } from '~/components/container'

import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix App' },
		{ name: 'description', content: 'Welcome to Remix!' },
	]
}

export default function Home() {
	return (
		<Container>
			<h1>teste</h1>
		</Container>
	)
}
