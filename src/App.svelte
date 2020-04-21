<script>
	import { db } from "./firebase.js"
	let forfattere = []

	let f = db.collection("forfattere")

	f.onSnapshot(snap => {
		forfattere = snap.docs
	})

</script>
<h1>Hallo</h1>
<main>
	<ul>
		{#each forfattere as forfatter}
			<li>{forfatter.data().navn}</li>
		{:else}
			<li>Laster data...</li>
		{/each}
	</ul>
</main>

	