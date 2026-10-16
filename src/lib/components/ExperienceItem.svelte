<script lang="ts">
	import type { Experience } from '#lib/data/resume.js';

	let { item }: { item: Experience } = $props();
</script>

<article>
	<h3>{item.role}, {item.organization}</h3>
	<p>{item.start} – {item.end} · {item.location}</p>
	<ul>
		{#each item.highlights as point (point)}
			<li>{point}</li>
		{/each}
	</ul>
</article>

<style>
	h3 {
		margin: 0;
	}

	p {
		margin: 0 0 var(--space-sm);
		font-size: 0.875rem;
		color: var(--color-muted);
	}

	ul {
		margin: 0;
		padding-left: 1.1rem;
	}
</style>
