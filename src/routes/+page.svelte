<script>
   export let data;

    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
    import { onMount } from 'svelte';

    import Header from '$lib/components/molecules/header.svelte';
    import WorkshopCard from '$lib/components/atoms/workshopCard.svelte';
    import Footer from '$lib/components/molecules/footer.svelte';

    gsap.registerPlugin(ScrollTrigger);

</script>


<Header />
<WorkshopCard data={data}/>
<Footer/>

<style>

</style>

