<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex flex-col justify-center h-full items-center mt-[200px]">
	<span class="text-6xl font-bold text-red-500 mb-4">Error {$page.status}</span>
	<span class="text-lg text-gray-600 md:text-gray-400 mb-8">{$page.error?.message}</span>

	<a href="/" class="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600">
		Go back to homepage
	</a>
</div>
