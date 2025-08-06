import { Button } from '../../components/Button';

export function Home() {
	return (
		<article class="relative overflow-hidden max-w-4xl mx-auto bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 rounded-2xl shadow-lg ring-1 ring-neutral-200 dark:ring-neutral-800 p-8 md:p-12" aria-labelledby="page-title">
			<div class="pointer-events-none absolute inset-0 -z-10">
				<div class="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-blue-100 blur-3xl dark:bg-blue-900/20"></div>
				<div class="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-purple-100 blur-3xl dark:bg-purple-900/20"></div>
			</div>

			<header class="mb-10">
				<h1 id="page-title" class="mt-4 mb-3 text-5xl sm:text-6xl font-semibold tracking-tight leading-tight">Stef Gijsberts</h1>
				<p class="text-xl text-neutral-700 dark:text-neutral-300">Hallo, wereld!</p>
			</header>

			<section class="grid gap-8 md:grid-cols-2 md:gap-10 mt-10" aria-label="Profiel">
				<div class="bg-white dark:bg-neutral-900 rounded-xl shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-800 p-6 md:p-8" aria-labelledby="activiteiten-title">
					<h2 id="activiteiten-title" class="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mt-2 mb-4">Activiteiten</h2>
					<ul class="list-disc pl-6 space-y-2 text-neutral-800 dark:text-neutral-200 leading-relaxed">
						<li>Bachelor Computing Science aan de Radboud Universiteit Nijmegen (2019 - 2025)</li>
						<li>Softwareontwikkelaar bij Monter Leefstijl (september 2022 - heden)</li>
						<li>Commissaris Extern, bestuur IV van SSVN Tussen de Torens (2024-2025)</li>
					</ul>
				</div>

				<div class="bg-white dark:bg-neutral-900 rounded-xl shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-800 p-6 md:p-8" aria-labelledby="projecten-title">
					<h2 id="projecten-title" class="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mt-2 mb-4">Projecten</h2>
					<ul class="list-disc pl-6 space-y-2 text-neutral-800 dark:text-neutral-200 leading-relaxed">
						<li>
							<a class="underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-700 dark:hover:decoration-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900" href="https://github.com/screensy/screensy" target="_blank" rel="noreferrer noopener">
								<cite>Screensy</cite>
							</a>
							, samen met{' '}
							<a class="underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-700 dark:hover:decoration-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900" href="https://nl.linkedin.com/in/marijnvanwezel" target="_blank" rel="noreferrer noopener">Marijn van Wezel</a>
						</li>
					</ul>
				</div>

				<div class="bg-white dark:bg-neutral-900 rounded-xl shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-800 p-6 md:p-8" aria-labelledby="links-title">
					<h2 id="links-title" class="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mt-2 mb-4">Links</h2>
					<ul class="list-disc pl-6 space-y-2 text-neutral-800 dark:text-neutral-200 leading-relaxed">
						<li>
							<a class="underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-700 dark:hover:decoration-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900" href="https://github.com/Stef-Gijsberts" target="_blank" rel="noreferrer noopener">GitHub</a>
						</li>
						<li>
							<a class="underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-700 dark:hover:decoration-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900" href="https://www.cs.ru.nl/bachelors-theses/2023/Stef_Gijsberts___1034031___Prusti_in_Practice_-_A_case_study_of_using_the_Prusti_auto-active_program_verifier_for_Rust.pdf" target="_blank" rel="noreferrer noopener">
								Bachelorscriptie
							</a>
						</li>
					</ul>
				</div>

				<div class="bg-white dark:bg-neutral-900 rounded-xl shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-800 p-6 md:p-8" aria-labelledby="contact-title">
					<h2 id="contact-title" class="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mt-2 mb-4">Contact</h2>
					<address class="not-italic text-neutral-800 dark:text-neutral-200 leading-relaxed">
						Stuur een e-mail naar{' '}
						<a class="underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-700 dark:hover:decoration-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900" href="mailto:stef@stef.link">
							stef@stef.link
						</a>
						.<br />
					</address>
				</div>
			</section>

			<nav class="mt-12 flex flex-wrap items-center gap-3 sm:gap-4" aria-label="Snelle acties">
				<Button href="mailto:stef@stef.link" variant="primary">
					Neem contact op
				</Button>
				<Button href="https://linkedin.com/in/stef-gijsberts" variant="outline">
					LinkedIn
				</Button>
				<Button href="https://github.com/Stef-Gijsberts" variant="outline">
					GitHub
				</Button>
			</nav>
		</article>
	);
}

function Resource(props) {
	return (
		<a
			href={props.href}
			target="_blank"
			rel="noreferrer noopener"
			class="bg-white dark:bg-neutral-900 rounded-xl shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-800 p-6 md:p-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900"
		>
			<h2 class="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mt-2 mb-4">{props.title}</h2>
			<p class="text-neutral-800 dark:text-neutral-200 leading-relaxed">{props.description}</p>
		</a>
	);
}
