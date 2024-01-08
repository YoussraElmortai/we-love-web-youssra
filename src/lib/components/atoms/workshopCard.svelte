<script>
    export let data
</script>
<section class="card-wrapper">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
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