<script lang="ts">
	import { faCodeFork, faEye } from "@fortawesome/free-solid-svg-icons";
	import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
	import Fa from "svelte-fa";
	import { formatDate } from "$lib";

	export let repo: Repository;
</script>

<a href={repo.html_url} target="_blank" rel="noopener noreferrer">
	<div class="card p-4 space-y-2">
		<header class="text-2xl font-bold">
			{repo.name}
		</header>
		<p class="line-clamp-2">{repo.description || 'No description available'}</p>
		<div class="flex gap-2 items-center">
			<span class="text-gray-500">Language:</span>
			<span>{repo.language || 'N/A'}</span>
		</div>
		<div class="flex gap-2 items-center">
			<span class="text-gray-500">Visibility:</span>
			<span class='{repo.visibility === 'public'? 'dark:text-success-500 text-success-700': 'dark:text-error-500 text-error-700'}'>{repo.visibility}</span>
		</div>
		<footer
			class="postDetails pb-4 pl-4 text-sm flex items-center gap-3"
			data-flip-id="postDetails-{repo.name}"
		>
			<div class="flex gap-2 items-center">
				<span class="text-gray-500">Created:</span>
				<span>{formatDate(new Date(repo.created_at).toLocaleDateString())}</span>
			</div>
			<span>•</span>
			<div class="flex gap-2 items-center">
				<span class="text-gray-500">Last Commit:</span>
				<span>{formatDate(new Date(repo.updated_at).toLocaleDateString())}</span>
			</div>
			<span>•</span>
			<div class="flex gap-2 items-center">
				<span class="text-gray-500"><Fa icon={faCodeFork}/></span>
				<span>{repo.forks_count}</span>
			</div>
			<span>•</span>
			<div class="flex gap-2 items-center">
				<span class="text-gray-500"><Fa icon={faCircleDot}/></span>
				<span>{repo.open_issues_count}</span>
			</div>
			<span>•</span>
			<div class="flex gap-2 items-center">
				<span class="text-gray-500"><Fa icon={faEye}/></span>
				<span>{repo.watchers}</span>
			</div>
		</footer>
	</div>
</a>
