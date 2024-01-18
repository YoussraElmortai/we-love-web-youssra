<script>
     export let data 
     import Header from '$lib/components/molecules/header.svelte';
     import Footer from '$lib/components/molecules/footer.svelte';
     console.log(data)
</script>

<Header/>
  <h1><span>*</span>{data.workshops.workshopTitle}</h1>
  <p>{@html data.workshops.workshopDescription.html}</p>
  <div class="stripe"></div>
<Footer/>

<style>

  h1{
    font-size: 50px;
    padding: 1rem;
  }
  span{
    color: var(--accent-color);
  }
  
  p{
    padding: 1rem;
  }

  .stripe{
    width: 100%;
    height: 4rem;
    background-color: var(--accent-color);
  }
</style>