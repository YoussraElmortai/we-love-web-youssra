<script>
    import { gsap } from 'gsap';
    import { onMount } from 'svelte';

    onMount(() => {
    const overlay = document.querySelector('.overlay');

    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

	    overlay.style.setProperty('--x', `${x}%`);
        overlay.style.setProperty('--y', `${y}%`);

      gsap.to(overlay, {
        '--x': `${x}%`,
       '--y': `${y}%`,
         duration: 0.3,
        ease: 'sine.out'
      });
    });
  });
</script>

<section class="carousel">
    <div>
    <img src="/timB.png" alt=" tim berners-lee wearing a black suit with a white blouse and blue tie">
    <blockquote>
    <p>“The original idea of the web was that it should be a collaborative space where you can communicate through sharing information.”</p>
        <cite>― Tim Berners-Lee</cite>
    </blockquote>
        <blockquote class="overlay">
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

    .overlay{
        background-color: var(--accent-color);
        position: absolute;
        top: 21.1rem;
		left: 0;
		width: 100%; 
		clip-path: circle(120px at var(--x, 50%) var(--y,50%));
        mix-blend-mode:color-dodge;
    }


</style>