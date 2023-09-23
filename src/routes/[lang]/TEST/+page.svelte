<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';

	const code1 = `
function getCurrentYear(): number {
    const currentDate = new Date();
    return currentDate.getFullYear();
}
const currentYear = getCurrentYear();
console.log(\`The current year is: \${currentYear}\`);`;
</script>

<div class="container h-full mx-auto gap-4 flex flex-col justify-center items-center mt-6">
	<header class="flex flex-col gap-2 items-center">
		<h2 class="h2 font-bold underline underline-offset-2">Just a test page</h2>
	</header>
	<article class="flex flex-col gap-2 items-center w-[750px]">
		<div class="card variant-filled-surface w-full">
			<header class="card-header">CodeBlock component</header>
			<div class="p-2 space-y-4">
				<CodeBlock language="html" lineNumbers pre-wrap code={`<div>This is meta</div>`} />
				<CodeBlock language="ts" lineNumbers pre-wrap code={code1} />
			</div>
		</div>
	</article>
</div>
