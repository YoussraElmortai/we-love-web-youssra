<script>
import { onMount } from "svelte";
</script>

<nav><img src="Vectorbluespiderweb.png" alt="We love web website"> <button>MENU</button></nav>

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
        margin: 0;
    }

    nav button{
        font-size: 22px;
        margin: 1.5rem;
        font-weight: bold;
        text-decoration: none;
        color: var(--text-color);
        border: none;
        border-bottom: 2px solid white;
        background-color: white;
    }

    nav button:hover{
        border-bottom: 2px solid var(--accent-color);
    }

</style>