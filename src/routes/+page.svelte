<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	console.log(data.session?.user);
	$: welcomeMessage = data.session?.user?.user_metadata?.full_name
		? `Welcome Home ${data.session?.user?.user_metadata?.full_name}`
		: 'Welcome Home';
</script>

<svelte:head>
	<title>Upper Room Media</title>
</svelte:head>

<div class="flex justify-center m-9">
	<div class="flex-auto">
		<h1>
			{welcomeMessage}
		</h1>
	</div>
</div>
