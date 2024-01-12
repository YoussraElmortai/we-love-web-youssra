<script>
    export let data 
    import Header from '$lib/components/molecules/header.svelte';
    import WorkshopCard from '$lib/components/atoms/workshopCard.svelte';
    import Footer from '$lib/components/molecules/footer.svelte';

</script>


<Header />
<WorkshopCard data={data}/>
<Footer/>

<style>

    
</style>

