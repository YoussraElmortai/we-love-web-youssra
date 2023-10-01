<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
	export let data;
</script>
<body>


<main>
     <input type="text" placeholder="Search..">

     <article>
    <SliceZone slices={data.slices} {components} />
    </article>


   
</main>
</body>

<style>

</style>




