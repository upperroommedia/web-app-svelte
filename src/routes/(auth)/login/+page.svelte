<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';

	export let data;
</script>

<svelte:head>
	<title>Upper Room Media</title>
</svelte:head>

<div class="flex justify-center m-9">
	<div class="flex-auto">
		<!-- TODO: get theme from skeleton lightswitch -->
		<Auth
			additionalData={{}}
			appearance={{ theme: ThemeSupa }}
			theme="dark"
			supabaseClient={data.supabase}
			providers={['google', 'apple', 'facebook']}
			redirectTo={`${data.url}/logging-in?redirect=/`}
		/>
	</div>
</div>
