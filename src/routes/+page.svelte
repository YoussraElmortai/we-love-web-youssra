<script></script>

<nav><img src="Vectorbluespiderweb.png" alt="We love web website"> <a href="/">HOME</a></nav>



<section class="carousel">
    <img src="/timB.png" alt=" tim berners-lee wearing a black suit with a white blouse and blue tie">
</section>

<section class="accordion">
    <span>Workshops</span>
    <span>Workshops</span>
    <span>Workshops</span>
    <span>Workshops</span>
    <span>Workshops</span>
</section>
<section class="accordion">
    <span>Workshops</span>
    <span>Workshops</span>
    <span>Workshops</span>
    <span>Workshops</span>
    <span>Workshops</span>
</section>
<section class="accordion">
    <span>Workshops</span>
    <span>Workshops</span>
    <span>Workshops</span>
    <span>Workshops</span>
    <span>Workshops</span>
</section>


<section class="card-wrapper">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</section>



<style>

    nav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 5rem;
        margin-bottom: 1rem;
    }

    nav img{
        width: auto;
        height: 4rem;
        margin: 0.3rem;
    }

    nav a{
        font-size: 22px;
        margin:1.5rem;
        font-weight: bold;
        text-decoration: none;
        color: var(--text-color);
    }

    nav a:hover{
        border-bottom: 2px solid var(--accent-color);
    }


  .carousel{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 2rem;
    }

    .carousel img{
        border: solid 3px var(--accent-color);
        border-radius: 5px;

    }


    .accordion{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        height: 10vh;
        width: 100%;
        border-top: solid 2px var(--accent-color);
        transition: 0.5s ease-in-out;
        overflow: hidden;
    }

    .accordion:hover{
        background-color: var(--accent-color);
    }

    .accordion span{
        font-size: 30px;
        font-family: var(--accent-font)
    }



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