<script>

</script>

<section class="carousel">
    <div>
    <img src="/timB.png" alt=" tim berners-lee wearing a black suit with a white blouse and blue tie">
    <blockquote>
    <p>“The original idea of the web was that it should be a collaborative space where you can communicate through sharing information.”</p>
        <cite>― Tim Berners-Lee</cite>
    </blockquote>
    </div>
</section>

<style>
    .carousel{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }

    div{
        text-align: center;
    }

    div img{
        border: 2px solid var(--accent-color);
        border-radius: 6px;
    }

    div blockquote{
        z-index: -1;
        position: relative;
        top: -2rem;
        font-size: 30px;
        font-weight: bold;
        background-color: var(--accent-color);
        color: var(--Light-grey);
        padding: 2rem;
    }


</style>