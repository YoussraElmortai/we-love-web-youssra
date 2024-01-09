<script>
    export let data
    console.log(data)

</script>

<section class="card-wrapper">
  {#each data.workshops as workshop}
    <div>
      <h1>{workshop.workshopTitle}</h1>
      <img src="{workshop.workshopImg}" alt="{workshop.workshopImg}">
    </div>
  {/each}


</section>


<style>
     .card-wrapper{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1.5rem;
        justify-content: center;
        padding: 2rem;
    }

    .card-wrapper div{
        height: 15rem;
        width: 10rem;
        background-color: var(--Light-grey);
    }

</style>