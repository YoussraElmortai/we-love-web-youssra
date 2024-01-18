<script>
   export let data;

    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
    import { onMount } from 'svelte';

    import Header from '$lib/components/molecules/header.svelte';
    import WorkshopCard from '$lib/components/atoms/workshopCard.svelte';
    import Footer from '$lib/components/molecules/footer.svelte';
</script>


<Header />
<section class="wrap">
    <div class="spacer"></div>
    <div class="work_left">
        <!-- show recent posts 5 -->
        <article class="workinfo">
        <h2>Learn about</h2>
        <p> exicting topics like webdesign trends and 3d animations</p>
        <a href="/">View post</a>
        </article>

         <article class="workinfo">
        <h2>Learn about</h2>
        <p> exicting topics like webdesign trends and 3d animations</p>
        <a href="/">View post</a>
         </article>

         <article class="workinfo">
        <h2>Learn about</h2>
        <p> exicting topics like webdesign trends and 3d animations</p>
        <a href="/">View post</a>
         </article>
    </div>
    <div class="work_right">
        <div class="work_right-wrapper">
        <div class="work_photo">
        <div class="work_photo_item">
            <img src="/timB.png" alt="tim">
        </div>
        <div class="work_photo_item">
            <img src="/timB.png" alt="tim">
        </div>
        <div class="work_photo_item">
            <img src="/timB.png" alt="tim">
        </div>
        </div>
    </div>
    <div class="spacer"></div>
</section>
<WorkshopCard data={data}/>
<Footer/>

<style>

    .wrap{
        position: relative;
        width: 100%;
        height: auto;
        padding: 0 20px;
        z-index: 1;
    }

    .spacer{
        width: 100%;
        height: 50vh;
        background-color: white;
    }

    .work{
        display: flex;
    }

    .work_left{
        position: relative;
        width: 54%;
        z-index: 2;
    }

    .work_text{
        margin: auto;
        width: 80%;
    }

    .work_info{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    a{
        display: block;
        text-decoration: none;
        background-color: red;
    }

    .work_right{
        width: 46%;
        height: auto;
    }
    
    .work_photo{
        width: 40vw;
        height: 30vw;
        position: relative;
    }

    .work_photo_item{
        position: absolute;
        width: 100%;
        height: 100%;
        cursor: pointer;
        border-radius: 80px;
        overflow: hidden;
    }

    .work_photo_item img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>

