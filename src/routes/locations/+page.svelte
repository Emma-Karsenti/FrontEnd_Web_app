<script>
    import FilmPreview from "$lib/FilmList/FilmPreview.svelte";
    import ComboBox from "$lib/FilmList/ComboBox.svelte";
    import Context from "$lib/FilmList/Context.svelte";
    import { enhance } from '$app/forms';
    /** @type {import('./$types').PageData} */
    export let data;
    let create = false;
    function Create() {
        if(create) create = false
        else create = true
    }

</script>

<svelte:head>
    <title>Conduit</title>
</svelte:head>

<div class="home-page" style= "margin-left: 17%; margin-top: 1%; adding: 20px; width: 700px; text-align: center">
    {#if data.token}
        {#if data.user.role === 'admin'}
            <button on:click={Create} class="btn btn-outline" style="display: flex ; flex-direction: initial ; color: white ; background-color: green ; margin-bottom: 1%">
                <i class="icon ion-android-add"></i> &nbsp;&nbsp; Create
            </button>
            {#if create}
                <form use:enhance method="POST" action="?/createLocation" class="card comment-form">
                    <div class="modal-content">
                        <h5>Ajout d'un lieu de tournage </h5>
                        <table class="table table-striped">
                            <tr>
                                <td>Nom</td>
                                <td><textarea  name="filmName" placeholder="filmName" rows="1" >Test</textarea></td>
                            </tr>
                            <tr>
                                <td>Genre</td>
                                <td><ComboBox
                                        placeholder= Long&nbsp;métrage
                                        options={[
    	                                            { text: "Long métrage", value: "Long métrage" },
    	                                            { text: "Série TV", value: "Série TV" },
			                                        { text: "Série Web", value: "Série Web" },
			                                        { text: "Téléfilm", value: "Téléfilm" },

  	                                     ]}
                                /></td>
                            </tr>
                            <tr>
                                <td>Producteur</td>
                                <td><textarea  name="filmProducerName" placeholder="filmProducerName" rows="1" >ESILV</textarea></td>
                            </tr>
                            <tr>
                                <td>Directeur</td>
                                <td><textarea  name="filmDirectorName" placeholder="filmDirectorName" rows="1" >Doina PAOLETTI</textarea></td>
                            </tr>
                            <tr>
                                <td>Adresse</td>
                                <td><textarea  name="address" placeholder="address" rows="1" >12 avenue Léonard de Vinci</textarea></td>
                            </tr>
                            <tr>
                                <td>Code Postal</td>
                                <td><textarea  name="district" placeholder="district" rows="1" >92000</textarea></td>
                            </tr>
                            <tr>
                                <td>Géolocalisation</td>
                                <td>
                                    <textarea  name="lattitute" placeholder="lattitude" rows="1" >0</textarea>
                                    <textarea  name="longitude" placeholder="longitude" rows="1" >0</textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>Début du tournage</td>
                                <td><textarea  name="startDate" placeholder="startDate" rows="1" >2023-08-01T00:00:00.000</textarea></td>
                            </tr>
                            <tr>
                                <td>Date fin du tournage</td>
                                <td><textarea  name="endDate" placeholder="endDate" rows="1" >2023-10-21T00:00:00.000</textarea></td>
                            </tr>
                            <tr>
                                <td>Année</td>
                                <td><textarea  name="year" placeholder="year" rows="1" >2023</textarea></td>
                            </tr>
                            <tr>
                                <td>SourceLocationId </td>
                                <td><textarea  name="sourceLocationId" placeholder="sourceLocationId" rows="1" >2020-100</textarea></td>
                            </tr>
                    </div>

                    <div class="card-footer">
                        <button class="btn btn-sm btn-primary" type="submit"> Post location &nbsp;&nbsp; <i class="icon ion-android-send"></i></button>
                    </div>
                </form>
            {/if}

        {/if}









        <table class="table table-striped" style="width: 40%;
                height: 60%;
                margin-left: initial;
                margin-right: initial;
                top: 0%;
                bottom: 0%;
                left: 0%;
                right: 0%;
                position: center;">


                <tbody>
                    {#each data.roger as film}
                        <tr>
                            <td>{film.filmName} </td>
                            <td> <FilmPreview {film}{data}/></td>
                           {#if data.user.role === 'admin'}
                                <td>
                                    <form use:enhance method="POST" action="?/deleteLocation&id={film._id}">
                                        <button class="btn btn-outline-danger btn-sm" >
                                            <i class="ion-trash-a" /> &nbsp; Delete
                                        </button>
                                    </form>
                                </td>
                            {/if}
                        </tr>
                    {/each}
                </tbody>
        </table>

        <style>
            .table table-striped {
                width: 40%;
                height: 60%;
                margin: auto;
                top: 0%;
                bottom: 0%;
                left: 0%;
                right: 0%;
                position: center;
            }
        </style>

    {/if}
</div>


<style>
    :global(button) {
        background: antiquewhite;
        margin: 0;
        border: 0;
        padding: 10px;
        font-palette: dark;
        opacity: 0.6;
        display: table-row;
        text-align: center;
    }
    section{
        display: flex;
        flex-direction: row;
    }
    textarea {
        margin: 0;
        width: 50%;
        padding: 0.2rem 1rem;
        border: 0.175rem solid antiquewhite;
        border-radius: 0.3rem;
    }

</style>