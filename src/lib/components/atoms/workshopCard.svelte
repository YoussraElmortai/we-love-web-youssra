<script>
    export let data
    console.log(data)

</script>

<section class="card-wrapper">
  {#each data.workshops as workshop}
    <article>
      <h2>{workshop.workshopTitle}</h2>
      <!-- <img src={workshop.workshopImg.url} alt="{workshop.workshopTitle}"> -->
      <a href={workshop.workshopSlug}>Learn more</a>
    </article>
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

    .card-wrapper article{
        height: 15rem;
        width: 10rem;
        background-color: var(--Light-grey);
        border: solid 2px var(--accent-color);
        border-radius: 5px;
        overflow: hidden;
    }


    a{
      position: relative;
      text-decoration: none;
      font-size: 18px;
      color: white;
      background-color: var(--accent-color);
      padding: 0.5rem;
      top: 1rem;
      z-index: 5;
    }


</style>