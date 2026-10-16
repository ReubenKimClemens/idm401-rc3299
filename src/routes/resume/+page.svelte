<script lang="ts">
	import ExperienceItem from '#lib/components/ExperienceItem.svelte';
	import { resume } from '#lib/data/resume.js';
</script>

<svelte:head>
	<title>Resume · {resume.name}</title>
</svelte:head>

<main>
	<header>
		<h1>{resume.name}</h1>
		<ul>
			{#each resume.contact as link (link.href)}
				<li><a href={link.href}>{link.label}</a></li>
			{/each}
		</ul>
	</header>

	<section>
		<h2>Education</h2>
		{#each resume.education as edu (edu.school)}
			<div>
				<h3>{edu.school}, {edu.location}</h3>
				<p>{edu.degree}</p>
				<p>{edu.graduation}</p>
			</div>
		{/each}
	</section>

	<section>
		<h2>Skills</h2>
		{#each resume.skills as group (group.category)}
			<div>
				<h3>{group.category}</h3>
				<ul class="skills">
					{#each group.items as skill (skill)}
						<li>{skill}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</section>

	<section>
		<h2>Work Experience</h2>
		{#each resume.work as job (job.role)}
			<ExperienceItem item={job} />
		{/each}
	</section>

	<section>
		<h2>Project Experience</h2>
		{#each resume.projects as project (project.role)}
			<ExperienceItem item={project} />
		{/each}
	</section>
</main>

<style>
	main {
		max-width: 60rem;
		margin-inline: auto;
		padding: var(--space-lg) var(--space-md);
	}

	h1 {
		margin: 0;
		font-size: clamp(2rem, 1.5rem + 2.5vw, 3rem);
	}

	header ul {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm) var(--space-md);
		padding: 0;
		list-style: none;
	}

	section {
		display: grid;
		gap: var(--space-md);
		padding-block: var(--space-lg);
		border-top: 1px solid var(--color-border);
	}

	h2 {
		margin: 0;
		font-size: 0.875rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-accent);
	}

	h3,
	p {
		margin: 0;
	}

	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
		margin: var(--space-sm) 0 0;
		padding: 0;
		list-style: none;
	}

	.skills li {
		padding: 0.15rem 0.75rem;
		font-size: 0.875rem;
		border: 1px solid var(--color-border);
		border-radius: 999px;
	}

	@media (min-width: 48rem) {
		section {
			grid-template-columns: 12rem 1fr;
		}

		/* Everything after the heading goes in the right-hand column. */
		section > :global(:not(h2)) {
			grid-column: 2;
		}
	}
</style>
