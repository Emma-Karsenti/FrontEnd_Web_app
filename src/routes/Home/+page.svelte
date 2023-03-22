
<script>
    import { onMount } from 'svelte'
    export let src;

    let loaded = false;
    let failed = false;
    let loading = false;

    onMount(() => {
        const img = new Image();
        img.src = src;
        loading = true;

        img.onload = () => {
            loading = false;
            loaded = true;
        };
        img.onerror = () => {
            loading = false;
            failed = true;
        };
    })
</script>
<div>
    <img src="https://www.lambesc.fr/fileadmin/user_upload/cinema.jpg" />
</div>

<style>
    img{
        /* On met en place le fond d'écran */
        min-height: 100%;
        min-width: 1024px;
        /* On indique un redimensionnement proportionnel */
        width: 100%;
        height: auto;
        /* L'image est positionnée en haut à gauche */
        position: fixed;
        top: 60px;
        left: 0;
    }
    @media screen and (max-width: 1024px) { /* Le traitement est ici spécifique à l'image */
        img{
            left: 50%;
            margin-left: -512px; /* 50% */
        }
    }

</style>