import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Home } from './pages/Home/index.js';
import { NotFound } from './pages/_404.js';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<main class="page-wrap min-h-screen text-[--color-fg] dark:text-[--color-fg-dark]">
				<div class="max-w-4xl mx-auto p-6 sm:p-10">
					<Router>
						<Route path="/" component={Home} />
						<Route default component={NotFound} />
					</Router>
				</div>
			</main>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
