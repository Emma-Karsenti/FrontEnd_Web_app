<script>
	import { page } from '$app/stores';
</script>

<nav class="navbar navbar-light" style="background-color: antiquewhite " >
	<div class="container" >
		<a class="navbar-brand" href="/"><p style="color:#5a1c73	;"><i class="icon ion-camera"></i> WebApp</p></a>
		<ul class="nav navbar-nav pull-xs-right">
			<li class="nav-item">
				<a class="nav-link" class:active={$page.url.pathname === '/Home'} href="/Home">Home</a>
			</li>

			{#if $page.data.user}
				<li class="nav-item">
					<a href="/locations" class="nav-link" class:active={$page.url.pathname === '/locations'}>
						 Locations
					</a>
				</li>

				<li class="nav-item">
					<a href="/settings" class="nav-link" class:active={$page.url.pathname === '/settings'}>
						<i class="ion-gear-a" />&nbsp;Settings
					</a>
				</li>

				<li class="nav-item">
					<a href="/profile/@{$page.data.user.username}" class="nav-link">
						<i class="ion-person" /> &nbsp;{$page.data.user.username}
					</a>
				</li>
			{:else}
				<li class="nav-item">
					<a href="/login" class="nav-link" class:active={$page.url.pathname === '/login'}>
						 Locations
					</a>
				</li>
				<li class="nav-item">
					<a href="/login" class="nav-link" class:active={$page.url.pathname === '/login'}>
						Log in
					</a>
				</li>

				<li class="nav-item">
					<a href="/register" class="nav-link" class:active={$page.url.pathname === '/register'}>
						Sign Up
					</a>
				</li>
			{/if}
		</ul>
	</div>
</nav>
