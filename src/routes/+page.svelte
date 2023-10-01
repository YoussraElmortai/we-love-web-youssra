<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
	export let data;
</script>
<body>
<header>
   <img src="logo.png" alt="we love web">
</header>

<main>
     <input type="text" placeholder="Search..">

     <article>
    <SliceZone slices={data.slices} {components} />
    </article>


   
</main>
</body>

<style>

</style>




