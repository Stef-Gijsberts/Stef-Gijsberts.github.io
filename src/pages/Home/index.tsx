import { Button } from '../../components/Button';

export function Home() {
	return (
		<article class="bg-white dark:bg-neutral-900 border-4 border-black dark:border-neutral-100 p-6 sm:p-10 shadow-[12px_12px_0_0_#000] dark:shadow-[12px_12px_0_0_#fafafa]">
			<header class="mb-8">
				<h1 class="mb-2 text-4xl sm:text-6xl font-extrabold tracking-tight">Stef Gijsberts</h1>
				<p class="text-lg">Hallo, wereld!</p>
			</header>

			<section class="grid md:grid-cols-2 gap-6 mt-8">
				<div class="bg-white dark:bg-neutral-900 border-4 border-black dark:border-neutral-100 p-4 shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fafafa]">
					<h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 mb-4">Activiteiten</h2>
					<ul class="list-disc pl-6 space-y-2">
						<li>Bachelor Computing Science aan de Radboud Universiteit Nijmegen (2019 - 2025)</li>
						<li>Softwareontwikkelaar bij Monter Leefstijl (september 2022 - heden)</li>
						<li>Commissaris Extern, bestuur IV van SSVN Tussen de Torens (2024-2025)</li>
					</ul>
				</div>

				<div class="bg-white dark:bg-neutral-900 border-4 border-black dark:border-neutral-100 p-4 shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fafafa]">
					<h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 mb-4">Projecten</h2>
					<ul class="list-disc pl-6 space-y-2">
						<li>
							<a class="underline decoration-[3px] underline-offset-2 decoration-black dark:decoration-neutral-100 hover:decoration-red-500" href="https://github.com/screensy/screensy">
								<cite>Screensy</cite>
							</a>
							, samen met{' '}
							<a class="underline decoration-[3px] underline-offset-2 decoration-black dark:decoration-neutral-100 hover:decoration-red-500" href="https://nl.linkedin.com/in/marijnvanwezel">Marijn van Wezel</a>
						</li>
					</ul>
				</div>

				<div class="bg-white dark:bg-neutral-900 border-4 border-black dark:border-neutral-100 p-4 shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fafafa]">
					<h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 mb-4">Links</h2>
					<ul class="list-disc pl-6 space-y-2">
						<li>
							<a class="underline decoration-[3px] underline-offset-2 decoration-black dark:decoration-neutral-100 hover:decoration-red-500" href="https://github.com/Stef-Gijsberts">GitHub</a>
						</li>
						<li>
							<a class="underline decoration-[3px] underline-offset-2 decoration-black dark:decoration-neutral-100 hover:decoration-red-500" href="https://www.cs.ru.nl/bachelors-theses/2023/Stef_Gijsberts___1034031___Prusti_in_Practice_-_A_case_study_of_using_the_Prusti_auto-active_program_verifier_for_Rust.pdf">
								Bachelorscriptie
							</a>
						</li>
					</ul>
				</div>

				<div class="bg-white dark:bg-neutral-900 border-4 border-black dark:border-neutral-100 p-4 shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fafafa]">
					<h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 mb-4">Contact</h2>
					<address class="not-italic">
						Stuur een e-mail naar{' '}
						<a
							class="underline decoration-[3px] underline-offset-2 decoration-black dark:decoration-neutral-100 hover:decoration-red-500"
							href="mailto:stef@stef.link"
						>
							stef@stef.link
						</a>
						.<br />
					</address>
				</div>
			</section>

			<div class="mt-10 flex gap-4">
				<Button href="https://github.com/Stef-Gijsberts" variant="white">
					GitHub
				</Button>
				<Button href="https://linkedin.com/in/stef-gijsberts" variant="white">
					LinkedIn
				</Button>
				<Button href="mailto:stef@stef.link" variant="blue">
					Neem contact op
				</Button>
			</div>
		</article>
	);
}

function Resource(props) {
	return (
		<a
			href={props.href}
			target="_blank"
			class="bg-white dark:bg-neutral-900 border-4 border-black dark:border-neutral-100 p-4 shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fafafa]"
		>
			<h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 mb-4">{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
