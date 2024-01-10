<script>
     export let data 
     import Header from '$lib/components/molecules/header.svelte';
      import Footer from '$lib/components/molecules/footer.svelte';
     console.log(data)
</script>
<Header/>
  <h1>{data.workshops.workshopTitle}</h1>
<Footer/>