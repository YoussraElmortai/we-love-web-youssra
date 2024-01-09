<script>
    export let data 
    import Header from '$lib/components/molecules/header.svelte';
    import Carousel from '$lib/components/molecules/carousel.svelte';
    import WorkshopCard from '$lib/components/atoms/workshopCard.svelte';
    import Footer from '$lib/components/molecules/footer.svelte';
</script>


<Header />
<Carousel />
<WorkshopCard data={data}/>
<Footer/>

