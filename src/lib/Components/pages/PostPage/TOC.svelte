<script lang="ts">
	import * as LL from "$paraglide/messages"
	import { tocStore, TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
</script>

<div class="card" >
	<TreeView labelledby="toc-heading">
		<TreeViewItem>
			<span class="pr-5">{LL.toc()}</span>
			<svelte:fragment slot="children">
				<div class="p-2 pr-5">
					<ul class="toc-list space-y-2">
						{#each $tocStore as tocHeading}
							<li>
								<a href="#{tocHeading.id}" class="toc-anchor">✨ {tocHeading.text}</a>
							</li>
						{/each}
					</ul>
				</div>
			</svelte:fragment>
		</TreeViewItem>
	</TreeView>
</div>
